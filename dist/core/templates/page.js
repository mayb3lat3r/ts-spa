"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Page {
    constructor(id) {
        this.container = document.createElement("div");
        this.container.id = id;
    }
    createHeaderTitle(text) {
        const headerTitle = document.createElement("h1");
        headerTitle.innerText = text;
        return headerTitle;
    }
    render() {
        return this.container;
    }
}
Page.textObject = {};
exports.default = Page;
//# sourceMappingURL=page.js.map