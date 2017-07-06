"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("../config");
function Html({ content, state }) {
    return React.createElement("html", null, React.createElement("head", null, React.createElement("meta", { charSet: "UTF-8" }), React.createElement("title", null, config_1.default.APP_TITLE), React.createElement("link", { rel: "stylesheet", href: config_1.default.FRONT_END_URL + '/app.css' }), React.createElement("link", { href: "https://fonts.googleapis.com/icon?family=Material+Icons", rel: "stylesheet" })), React.createElement("body", null, React.createElement("div", { id: "content", dangerouslySetInnerHTML: { __html: content } }), React.createElement("script", { dangerouslySetInnerHTML: {
            __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`
        } }), React.createElement("script", { src: config_1.default.FRONT_END_URL + '/vendors.js' }), React.createElement("script", { src: config_1.default.FRONT_END_URL + '/app.js' })));
}
exports.default = Html;
//# sourceMappingURL=Html.js.map