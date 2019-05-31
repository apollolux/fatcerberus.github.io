export var Key;
(function (Key) {
    Key[Key["Alt"] = 0] = "Alt";
    Key[Key["AltGr"] = 1] = "AltGr";
    Key[Key["Apostrophe"] = 2] = "Apostrophe";
    Key[Key["Backslash"] = 3] = "Backslash";
    Key[Key["Backspace"] = 4] = "Backspace";
    Key[Key["CapsLock"] = 5] = "CapsLock";
    Key[Key["CloseBrace"] = 6] = "CloseBrace";
    Key[Key["Comma"] = 7] = "Comma";
    Key[Key["Delete"] = 8] = "Delete";
    Key[Key["Down"] = 9] = "Down";
    Key[Key["End"] = 10] = "End";
    Key[Key["Enter"] = 11] = "Enter";
    Key[Key["Equals"] = 12] = "Equals";
    Key[Key["Escape"] = 13] = "Escape";
    Key[Key["F1"] = 14] = "F1";
    Key[Key["F2"] = 15] = "F2";
    Key[Key["F3"] = 16] = "F3";
    Key[Key["F4"] = 17] = "F4";
    Key[Key["F5"] = 18] = "F5";
    Key[Key["F6"] = 19] = "F6";
    Key[Key["F7"] = 20] = "F7";
    Key[Key["F8"] = 21] = "F8";
    Key[Key["F9"] = 22] = "F9";
    Key[Key["F10"] = 23] = "F10";
    Key[Key["F11"] = 24] = "F11";
    Key[Key["F12"] = 25] = "F12";
    Key[Key["Home"] = 26] = "Home";
    Key[Key["Hyphen"] = 27] = "Hyphen";
    Key[Key["Insert"] = 28] = "Insert";
    Key[Key["LCtrl"] = 29] = "LCtrl";
    Key[Key["LShift"] = 30] = "LShift";
    Key[Key["Left"] = 31] = "Left";
    Key[Key["NumLock"] = 32] = "NumLock";
    Key[Key["OpenBrace"] = 33] = "OpenBrace";
    Key[Key["PageDown"] = 34] = "PageDown";
    Key[Key["PageUp"] = 35] = "PageUp";
    Key[Key["Period"] = 36] = "Period";
    Key[Key["RCtrl"] = 37] = "RCtrl";
    Key[Key["RShift"] = 38] = "RShift";
    Key[Key["Right"] = 39] = "Right";
    Key[Key["ScrollLock"] = 40] = "ScrollLock";
    Key[Key["Semicolon"] = 41] = "Semicolon";
    Key[Key["Slash"] = 42] = "Slash";
    Key[Key["Space"] = 43] = "Space";
    Key[Key["Tab"] = 44] = "Tab";
    Key[Key["Tilde"] = 45] = "Tilde";
    Key[Key["Up"] = 46] = "Up";
    Key[Key["A"] = 47] = "A";
    Key[Key["B"] = 48] = "B";
    Key[Key["C"] = 49] = "C";
    Key[Key["D"] = 50] = "D";
    Key[Key["E"] = 51] = "E";
    Key[Key["F"] = 52] = "F";
    Key[Key["G"] = 53] = "G";
    Key[Key["H"] = 54] = "H";
    Key[Key["I"] = 55] = "I";
    Key[Key["J"] = 56] = "J";
    Key[Key["K"] = 57] = "K";
    Key[Key["L"] = 58] = "L";
    Key[Key["M"] = 59] = "M";
    Key[Key["N"] = 60] = "N";
    Key[Key["O"] = 61] = "O";
    Key[Key["P"] = 62] = "P";
    Key[Key["Q"] = 63] = "Q";
    Key[Key["R"] = 64] = "R";
    Key[Key["S"] = 65] = "S";
    Key[Key["T"] = 66] = "T";
    Key[Key["U"] = 67] = "U";
    Key[Key["V"] = 68] = "V";
    Key[Key["W"] = 69] = "W";
    Key[Key["X"] = 70] = "X";
    Key[Key["Y"] = 71] = "Y";
    Key[Key["Z"] = 72] = "Z";
    Key[Key["D1"] = 73] = "D1";
    Key[Key["D2"] = 74] = "D2";
    Key[Key["D3"] = 75] = "D3";
    Key[Key["D4"] = 76] = "D4";
    Key[Key["D5"] = 77] = "D5";
    Key[Key["D6"] = 78] = "D6";
    Key[Key["D7"] = 79] = "D7";
    Key[Key["D8"] = 80] = "D8";
    Key[Key["D9"] = 81] = "D9";
    Key[Key["D0"] = 82] = "D0";
    Key[Key["NumPad1"] = 83] = "NumPad1";
    Key[Key["NumPad2"] = 84] = "NumPad2";
    Key[Key["NumPad3"] = 85] = "NumPad3";
    Key[Key["NumPad4"] = 86] = "NumPad4";
    Key[Key["NumPad5"] = 87] = "NumPad5";
    Key[Key["NumPad6"] = 88] = "NumPad6";
    Key[Key["NumPad7"] = 89] = "NumPad7";
    Key[Key["NumPad8"] = 90] = "NumPad8";
    Key[Key["NumPad9"] = 91] = "NumPad9";
    Key[Key["NumPad0"] = 92] = "NumPad0";
    Key[Key["NumPadEnter"] = 93] = "NumPadEnter";
    Key[Key["Add"] = 94] = "Add";
    Key[Key["Decimal"] = 95] = "Decimal";
    Key[Key["Divide"] = 96] = "Divide";
    Key[Key["Multiply"] = 97] = "Multiply";
    Key[Key["Subtract"] = 98] = "Subtract";
})(Key || (Key = {}));
export var MouseKey;
(function (MouseKey) {
    MouseKey[MouseKey["Left"] = 0] = "Left";
    MouseKey[MouseKey["Middle"] = 1] = "Middle";
    MouseKey[MouseKey["Right"] = 2] = "Right";
    MouseKey[MouseKey["Back"] = 3] = "Back";
    MouseKey[MouseKey["Forward"] = 4] = "Forward";
    MouseKey[MouseKey["WheelUp"] = 5] = "WheelUp";
    MouseKey[MouseKey["WheelDown"] = 6] = "WheelDown";
})(MouseKey || (MouseKey = {}));
export default class InputEngine {
    constructor(canvas) {
        this.buttonDown = {};
        this.keyQueue = [];
        this.lastMouseX = undefined;
        this.lastMouseY = undefined;
        this.mouseQueue = [];
        this.pressed = { '': false };
        canvas.addEventListener('contextmenu', e => e.preventDefault());
        canvas.addEventListener('keydown', e => {
            e.preventDefault();
            this.pressed[e.code] = true;
            switch (e.code) {
                case 'ArrowLeft':
                    this.keyQueue.push(Key.Left);
                    break;
                case 'ArrowRight':
                    this.keyQueue.push(Key.Right);
                    break;
                case 'ArrowDown':
                    this.keyQueue.push(Key.Down);
                    break;
                case 'ArrowUp':
                    this.keyQueue.push(Key.Up);
                    break;
                case 'Backquote':
                    this.keyQueue.push(Key.Tilde);
                    break;
                case 'Backslash':
                    this.keyQueue.push(Key.Backslash);
                    break;
                case 'Backspace':
                    this.keyQueue.push(Key.Backspace);
                    break;
                case 'Digit0':
                    this.keyQueue.push(Key.D0);
                    break;
                case 'Digit1':
                    this.keyQueue.push(Key.D1);
                    break;
                case 'Digit2':
                    this.keyQueue.push(Key.D2);
                    break;
                case 'Digit3':
                    this.keyQueue.push(Key.D3);
                    break;
                case 'Digit4':
                    this.keyQueue.push(Key.D4);
                    break;
                case 'Digit5':
                    this.keyQueue.push(Key.D5);
                    break;
                case 'Digit6':
                    this.keyQueue.push(Key.D6);
                    break;
                case 'Digit7':
                    this.keyQueue.push(Key.D7);
                    break;
                case 'Digit8':
                    this.keyQueue.push(Key.D8);
                    break;
                case 'Digit9':
                    this.keyQueue.push(Key.D9);
                    break;
                case 'End':
                    this.keyQueue.push(Key.End);
                    break;
                case 'Enter':
                    this.keyQueue.push(Key.Enter);
                    break;
                case 'Home':
                    this.keyQueue.push(Key.Home);
                    break;
                case 'KeyA':
                    this.keyQueue.push(Key.A);
                    break;
                case 'KeyB':
                    this.keyQueue.push(Key.B);
                    break;
                case 'KeyC':
                    this.keyQueue.push(Key.C);
                    break;
                case 'KeyD':
                    this.keyQueue.push(Key.D);
                    break;
                case 'KeyE':
                    this.keyQueue.push(Key.E);
                    break;
                case 'KeyF':
                    this.keyQueue.push(Key.F);
                    break;
                case 'KeyG':
                    this.keyQueue.push(Key.G);
                    break;
                case 'KeyH':
                    this.keyQueue.push(Key.H);
                    break;
                case 'KeyI':
                    this.keyQueue.push(Key.I);
                    break;
                case 'KeyJ':
                    this.keyQueue.push(Key.J);
                    break;
                case 'KeyK':
                    this.keyQueue.push(Key.K);
                    break;
                case 'KeyL':
                    this.keyQueue.push(Key.L);
                    break;
                case 'KeyM':
                    this.keyQueue.push(Key.M);
                    break;
                case 'KeyN':
                    this.keyQueue.push(Key.N);
                    break;
                case 'KeyO':
                    this.keyQueue.push(Key.O);
                    break;
                case 'KeyP':
                    this.keyQueue.push(Key.P);
                    break;
                case 'KeyQ':
                    this.keyQueue.push(Key.Q);
                    break;
                case 'KeyR':
                    this.keyQueue.push(Key.R);
                    break;
                case 'KeyS':
                    this.keyQueue.push(Key.S);
                    break;
                case 'KeyT':
                    this.keyQueue.push(Key.T);
                    break;
                case 'KeyU':
                    this.keyQueue.push(Key.U);
                    break;
                case 'KeyV':
                    this.keyQueue.push(Key.V);
                    break;
                case 'KeyW':
                    this.keyQueue.push(Key.W);
                    break;
                case 'KeyX':
                    this.keyQueue.push(Key.X);
                    break;
                case 'KeyY':
                    this.keyQueue.push(Key.Y);
                    break;
                case 'KeyZ':
                    this.keyQueue.push(Key.Z);
                    break;
                case 'PageDown':
                    this.keyQueue.push(Key.PageDown);
                    break;
                case 'PageUp':
                    this.keyQueue.push(Key.PageUp);
                    break;
                case 'Period':
                    this.keyQueue.push(Key.Period);
                    break;
                case 'Slash':
                    this.keyQueue.push(Key.Slash);
                    break;
                case 'Space':
                    this.keyQueue.push(Key.Space);
                    break;
            }
        });
        canvas.addEventListener('keyup', e => {
            e.preventDefault();
            this.pressed[e.code] = false;
        });
        canvas.addEventListener('mousemove', e => {
            e.preventDefault();
            this.lastMouseX = e.offsetX;
            this.lastMouseY = e.offsetY;
        });
        canvas.addEventListener('mouseout', e => {
            e.preventDefault();
            this.lastMouseX = undefined;
            this.lastMouseY = undefined;
        });
        canvas.addEventListener('mousedown', e => {
            e.preventDefault();
            canvas.focus();
            const key = e.button === 1 ? MouseKey.Middle
                : e.button === 2 ? MouseKey.Right
                    : e.button === 3 ? MouseKey.Back
                        : e.button === 4 ? MouseKey.Forward
                            : MouseKey.Left;
            this.buttonDown[key] = true;
        });
        canvas.addEventListener('mouseup', e => {
            e.preventDefault();
            const key = e.button === 1 ? MouseKey.Middle
                : e.button === 2 ? MouseKey.Right
                    : e.button === 3 ? MouseKey.Back
                        : e.button === 4 ? MouseKey.Forward
                            : MouseKey.Left;
            this.buttonDown[key] = false;
            this.mouseQueue.push({
                key,
                x: e.offsetX,
                y: e.offsetY,
            });
        });
        canvas.addEventListener('wheel', e => {
            e.preventDefault();
            const key = e.deltaY < 0.0 ? MouseKey.WheelUp
                : MouseKey.WheelDown;
            this.mouseQueue.push({
                key,
                delta: Math.abs(e.deltaY),
                x: e.offsetX,
                y: e.offsetY,
            });
        });
    }
    get mouseX() {
        return this.lastMouseX;
    }
    get mouseY() {
        return this.lastMouseY;
    }
    clearKeyQueue() {
        this.keyQueue.length = 0;
    }
    clearMouseQueue() {
        this.mouseQueue.length = 0;
    }
    getKey() {
        const key = this.keyQueue.pop();
        return key !== undefined ? key : null;
    }
    getMouseEvent() {
        const event = this.mouseQueue.pop();
        return event !== undefined ? event : null;
    }
    isKeyDown(key) {
        const keySpec = key === Key.Tilde ? 'Backquote'
            : key === Key.D0 ? 'Digit0'
                : key === Key.D1 ? 'Digit1'
                    : key === Key.D2 ? 'Digit2'
                        : key === Key.D3 ? 'Digit3'
                            : key === Key.D4 ? 'Digit4'
                                : key === Key.D5 ? 'Digit5'
                                    : key === Key.D6 ? 'Digit6'
                                        : key === Key.D7 ? 'Digit7'
                                            : key === Key.D8 ? 'Digit8'
                                                : key === Key.D9 ? 'Digit9'
                                                    : key === Key.A ? 'KeyA'
                                                        : key === Key.B ? 'KeyB'
                                                            : key === Key.C ? 'KeyC'
                                                                : key === Key.D ? 'KeyD'
                                                                    : key === Key.E ? 'KeyE'
                                                                        : key === Key.F ? 'KeyF'
                                                                            : key === Key.G ? 'KeyG'
                                                                                : key === Key.H ? 'KeyH'
                                                                                    : key === Key.I ? 'KeyI'
                                                                                        : key === Key.J ? 'KeyJ'
                                                                                            : key === Key.K ? 'KeyK'
                                                                                                : key === Key.L ? 'KeyL'
                                                                                                    : key === Key.M ? 'KeyM'
                                                                                                        : key === Key.N ? 'KeyN'
                                                                                                            : key === Key.O ? 'KeyO'
                                                                                                                : key === Key.P ? 'KeyP'
                                                                                                                    : key === Key.Q ? 'KeyQ'
                                                                                                                        : key === Key.R ? 'KeyR'
                                                                                                                            : key === Key.S ? 'KeyS'
                                                                                                                                : key === Key.T ? 'KeyT'
                                                                                                                                    : key === Key.U ? 'KeyU'
                                                                                                                                        : key === Key.V ? 'KeyV'
                                                                                                                                            : key === Key.W ? 'KeyW'
                                                                                                                                                : key === Key.X ? 'KeyX'
                                                                                                                                                    : key === Key.Y ? 'KeyY'
                                                                                                                                                        : key === Key.Z ? 'KeyZ'
                                                                                                                                                            : key === Key.PageDown ? 'PageDown'
                                                                                                                                                                : key === Key.PageUp ? 'PageUp'
                                                                                                                                                                    : key === Key.LShift ? 'ShiftLeft'
                                                                                                                                                                        : key === Key.LCtrl ? 'ControlLeft'
                                                                                                                                                                            : key === Key.Alt ? 'AltLeft'
                                                                                                                                                                                : key === Key.RShift ? 'ShiftRight'
                                                                                                                                                                                    : key === Key.RCtrl ? 'ControlRight'
                                                                                                                                                                                        : key === Key.AltGr ? 'AltRight'
                                                                                                                                                                                            : "";
        return this.pressed[keySpec];
    }
    isMouseKeyDown(key) {
        return !!this.buttonDown[key];
    }
}
//# sourceMappingURL=input-engine.js.map