"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("../main"));
const statistics_1 = __importDefault(require("../statistics"));
class App {
    constructor() {
        this.container = document.querySelector("#root");
        this.initialPage = new main_1.default("main-page");
    }
    static renderNewPage(page) {
        const container = document.querySelector("#root");
        container.innerHTML = "";
        if (page) {
            container.append(page.render());
        }
    }
    enableRouteChange() {
        window.addEventListener("hashchange", () => {
            console.log("hashchange");
        });
    }
    run() {
        App.renderNewPage(new statistics_1.default("main-page"));
        this.enableRouteChange();
        history.pushState({ foo: "bar" }, "page2", "bar");
    }
}
exports.default = App;
//# sourceMappingURL=index.js.map