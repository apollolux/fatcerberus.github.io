var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as version from './version.js';
import Galileo from './galileo.js';
import InputEngine from './input-engine.js';
import Pegasus from './pegasus.js';
const mainCanvas = document.getElementById('screen');
const inputEngine = new InputEngine(mainCanvas);
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Galileo.initialize(mainCanvas);
        mainCanvas.onclick = () => __awaiter(this, void 0, void 0, function* () {
            mainCanvas.onclick = null;
            const headingDiv = document.getElementById('prompt');
            headingDiv.innerHTML = `<tt><i>loading...</i></tt>`;
            yield Pegasus.initialize(inputEngine);
            let game;
            try {
                game = yield Pegasus.launchGame('./game/');
                headingDiv.innerHTML = `
				<tt><i>${game.title}</i> by <b>${game.author}</b></tt><br>
				<tt>- <b>${version.name} ${version.version}</b> implementing <b>API v${version.apiVersion} level ${version.apiLevel}</b></tt><br>
				<tt>- game compiled with <b>${game.compiler}</b></tt><br>
				<tt>- backbuffer resolution is <b>${game.resolution.x}x${game.resolution.y}</b></tt><br>
				<br>
				<tt><b>About this Game:</b></tt><br>
				<tt>${game.summary}</tt>
			`;
            }
            catch (e) {
                headingDiv.innerHTML = `<font color=#C88><tt>Unable to load Sphere game.  Check the console for more info.</tt></font>`;
                throw e;
            }
        });
    });
}
//# sourceMappingURL=main.js.map