import * as galileo from './galileo.js';
import * as util from './utility.js';
let nextJobID = 1;
export var JobType;
(function (JobType) {
    JobType[JobType["Immediate"] = 0] = "Immediate";
    JobType[JobType["Render"] = 1] = "Render";
    JobType[JobType["Update"] = 2] = "Update";
})(JobType || (JobType = {}));
export default class EventLoop {
    constructor() {
        this.frameCount = -1;
        this.jobQueue = [];
        this.rafCallback = this.animate.bind(this);
        this.rafID = 0;
        this.sortNeeded = false;
    }
    addJob(type, callback, recurring = false, delayOrPriority = 0) {
        const timer = !recurring ? delayOrPriority : 0;
        let priority = recurring ? delayOrPriority : 0.0;
        if (type === JobType.Render)
            priority = -(priority);
        this.jobQueue.push({
            jobID: nextJobID,
            type,
            callback,
            priority,
            recurring,
            running: false,
            timer,
        });
        this.sortNeeded = true;
        return nextJobID++;
    }
    animate(_timestamp) {
        this.rafID = requestAnimationFrame(this.rafCallback);
        ++this.frameCount;
        galileo.DrawTarget.Screen.activate();
        galileo.DrawTarget.Screen.unclip();
        galileo.Prim.clear();
        this.runJobs(JobType.Render);
        this.runJobs(JobType.Update);
        this.runJobs(JobType.Immediate);
    }
    cancelJob(jobID) {
        let ptr = 0;
        for (let i = 0, len = this.jobQueue.length; i < len; ++i) {
            const job = this.jobQueue[i];
            if (job.jobID === jobID)
                continue;
            this.jobQueue[ptr++] = job;
        }
        this.jobQueue.length = ptr;
    }
    now() {
        return Math.max(this.frameCount, 0);
    }
    runJobs(type) {
        if (this.sortNeeded) {
            this.jobQueue.sort((a, b) => {
                const delta = b.priority - a.priority;
                const fifoDelta = a.jobID - b.jobID;
                return delta !== 0 ? delta : fifoDelta;
            });
            this.sortNeeded = false;
        }
        for (const job of this.jobQueue) {
            if (job.type === type && !job.running && (job.recurring || job.timer-- <= 0)) {
                job.running = true;
                util.promiseTry(job.callback)
                    .then(() => job.running = false);
            }
        }
        let ptr = 0;
        for (let i = 0, len = this.jobQueue.length; i < len; ++i) {
            const job = this.jobQueue[i];
            if (!job.recurring && job.timer < 0)
                continue;
            this.jobQueue[ptr++] = job;
        }
        this.jobQueue.length = ptr;
    }
    start() {
        if (this.rafID !== 0)
            return;
        this.rafID = requestAnimationFrame(this.rafCallback);
    }
    stop() {
        if (this.rafID !== 0)
            cancelAnimationFrame(this.rafID);
        this.frameCount = 0;
        this.jobQueue.length = 0;
        this.rafID = 0;
    }
}
//# sourceMappingURL=event-loop.js.map