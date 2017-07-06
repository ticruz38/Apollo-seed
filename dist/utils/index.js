"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DocumentParser {
    constructor(document) {
        this.document = document;
        document.definitions.map(def => {
            this[def.name.value] = Object.assign({}, document, { definitions: [def] });
        });
    }
    get(prop) {
        if (!this[prop]) {
            throw prop + ' is not defined for that document';
        }
        return this[prop];
    }
}
exports.DocumentParser = DocumentParser;
//# sourceMappingURL=index.js.map