var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class Fido {
    constructor() {
        this.jobs = [];
    }
    fetch(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = {
                url,
                bytesDone: 0,
                totalSize: null,
            };
            this.jobs.push(job);
            const response = yield fetch(url);
            if (response.body === null)
                throw Error(`Unable to fetch '${url}' (${response.status})`);
            const reader = response.body.getReader();
            const length = response.headers.get('Content-Length');
            if (length !== null)
                job.totalSize = parseInt(length);
            let finished = false;
            const chunks = [];
            while (!finished) {
                const { value: data, done } = yield reader.read();
                if (!done) {
                    chunks.push(data);
                    job.bytesDone += data.length;
                }
                finished = done;
            }
            return new Blob(chunks);
        });
    }
    fetchImage(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const blob = yield this.fetch(url);
            return new Promise((resolve, reject) => {
                const image = new Image();
                image.onload = () => {
                    resolve(image);
                    URL.revokeObjectURL(image.src);
                };
                image.onerror = () => {
                    reject(new Error(`Unable to load image file '${url}'`));
                    URL.revokeObjectURL(image.src);
                };
                image.src = URL.createObjectURL(blob);
            });
        });
    }
    get numJobs() {
        return this.jobs.length;
    }
    get progress() {
        let bytesTotal = 0;
        let bytesDone = 0;
        for (let i = 0, len = this.jobs.length; i < len; ++i) {
            const job = this.jobs[i];
            if (job.totalSize === null)
                continue;
            bytesTotal += job.totalSize;
            bytesDone += job.bytesDone;
        }
        return bytesTotal > 0 ? bytesDone / bytesTotal : 1.0;
    }
}
//# sourceMappingURL=fido.js.map