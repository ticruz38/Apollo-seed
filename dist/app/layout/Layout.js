"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const classnames_1 = require("classnames");
const components_1 = require("../../components");
class Layout extends React.Component {
    get backButton() {
        return React.createElement(components_1.Button, { message: this.props.backRoute, icon: React.createElement("i", { className: "material-icons" }, "keyboard_arrow_left"), to: this.props.backRoute, className: classnames_1.default('back-button', { hidden: !this.props.backRoute }) });
    }
    get icon() {
        return React.createElement(components_1.Button, { to: "/rooms", icon: React.createElement("i", { className: "material-icons" }, "weekend"), className: 'app-icon', appear: true });
    }
    render() {
        return React.createElement("div", { className: 'layout' }, React.createElement("div", { className: classnames_1.default({ blur: this.state.modal || this.state.loader }) }, React.createElement("div", { className: "background", style: { backgroundImage: this.props.backgroundImage ? 'url(' + this.props.backgroundImage + ')' : 'none' } }), React.createElement("header", { className: "navigation" }, React.createElement("div", { className: "left-items" }, this.icon, React.createElement("div", { className: "title" }, this.props.title), this.backButton, React.createElement("div", { className: "toolbar" }, this.state.toolbar)), React.createElement("div", { className: "right-items" }, React.createElement("div", { className: 'auth' }, React.createElement(components_1.Dropdown, { button: React.createElement(components_1.Button, { message: "Log-In" }), list: [] })))), this.props.children), React.createElement(components_1.Modal, { onClose: this.props.onClose, setModal: this.props.setModal }, this.state.modal), React.createElement(components_1.Modal, { unclosable: true }, this.state.loader));
    }
}

exports.default = react_redux_1.connect()(Layout);
//# sourceMappingURL=/Users/tduchene/Code/apollo/app/layout/Layout.js.map