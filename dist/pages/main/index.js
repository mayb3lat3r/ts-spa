"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = __importDefault(require("../../core/templates/page"));
class MainPage extends page_1.default {
    constructor(id) {
        super(id);
    }
    render() {
        const title = this.createHeaderTitle(MainPage.textObject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}
MainPage.textObject = {
    MainTitle: "Main Page",
};
exports.default = MainPage;
//# sourceMappingURL=index.js.map