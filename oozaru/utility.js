var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function fetchAudio(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const audio = new Audio();
            audio.onloadedmetadata = () => resolve(audio);
            audio.onerror = () => reject(new Error(`Unable to load audio file '${url}'`));
            audio.src = url;
        });
    });
}
export function fetchJSON(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield fetch(url)).json();
    });
}
export function fetchModule(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const vector = `$moduleNS$${Math.random().toString(32).slice(2)}`;
        const globalThis = window;
        const fullURL = toAbsoluteURL(url);
        const source = `
		import * as module from "${fullURL}";
		window.${vector} = module;
	`;
        const blob = new Blob([source], { type: 'text/javascript' });
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.type = 'module';
            const finishUp = () => {
                delete globalThis[vector];
                script.remove();
                URL.revokeObjectURL(script.src);
            };
            script.onload = () => {
                resolve(globalThis[vector]);
                finishUp();
            };
            script.onerror = () => {
                reject(new Error(`Unable to load JS module '${url}'`));
                finishUp();
            };
            script.src = URL.createObjectURL(blob);
            document.head.appendChild(script);
        });
    });
}
export function fetchRawFile(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileRequest = yield fetch(url);
        return fileRequest.arrayBuffer();
    });
}
export function fetchScript(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.onload = () => {
                resolve();
                script.remove();
            };
            script.onerror = () => {
                reject(new Error(`Unable to load JS script '${url}'`));
                script.remove();
            };
            script.src = url;
            document.head.appendChild(script);
        });
    });
}
export function fetchText(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileRequest = yield fetch(url);
        return fileRequest.text();
    });
}
export function isConstructor(func) {
    const funcProxy = new Proxy(func, { construct() { return {}; } });
    try {
        Reflect.construct(funcProxy, []);
        return true;
    }
    catch (_a) {
        return false;
    }
}
export function promiseTry(callback) {
    return new Promise(resolve => {
        resolve(callback());
    });
}
function toAbsoluteURL(url) {
    const anchor = document.createElement('a');
    anchor.setAttribute("href", url);
    return anchor.cloneNode(false).href;
}
//# sourceMappingURL=utility.js.map