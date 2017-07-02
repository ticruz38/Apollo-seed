"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_1 = require("react-router");
const react_redux_1 = require("react-redux");
const react_apollo_1 = require("react-apollo");
const classnames = require("classnames");
const actions = require("./LayoutReducer");
const utils_1 = require("utils");
const components_1 = require("../../components");
// import LayoutQuery from './Layout.gql';
const Document = new utils_1.DocumentParser(require('./Layout.gql'));
class Layout extends React.Component {
    get backButton() {
        return React.createElement(components_1.Button, { message: this.props.backRoute, icon: React.createElement("i", { className: "material-icons" }, "keyboard_arrow_left"), to: this.props.backRoute, className: classnames('back-button', { hidden: !this.props.backRoute }) });
    }
    get signin() {
        if (this.props.location.pathname !== this.props.match.url + "signin") return null;
        return React.createElement("span", null, "Signin");
    }
    get signup() {
        if (this.props.location.pathname !== this.props.match.url + "signup") return null;
        return React.createElement("span", null, "Signup");
    }
    get icon() {
        return React.createElement(components_1.Button, { to: "/rooms", icon: React.createElement("i", { className: "material-icons" }, "weekend"), className: "app-icon", appear: true });
    }
    render() {
        return React.createElement("div", { className: "layout" }, React.createElement("div", { className: classnames({ blur: this.props.modal || this.props.loader }) }, React.createElement("div", { className: "background", style: {
                backgroundImage: this.props.backgroundImage ? 'url(' + this.props.backgroundImage + ')' : 'none'
            } }), React.createElement("header", { className: "navigation" }, React.createElement("div", { className: "left-items" }, this.icon, React.createElement("div", { className: "title" }, this.props.title), this.backButton, React.createElement("div", { className: "toolbar" }, this.props.toolbar)), React.createElement("div", { className: "right-items" }, React.createElement("div", { className: "auth" }, React.createElement(components_1.Dropdown, { button: React.createElement(components_1.Button, { message: "Log-In", to: "signin" }), list: [] })))), React.createElement("div", { className: "body" }, React.createElement(react_router_1.Route, { path: this.props.match.url }))), React.createElement(components_1.Modal, { onClose: _ => this.props.dispatch(actions.toggleModal()) }, this.props.modal), React.createElement(components_1.Modal, { onClose: _ => this.props.history.goBack() }, this.signup), React.createElement(components_1.Modal, { onClose: _ => this.props.history.goBack() }, this.signin), React.createElement(components_1.Modal, { unclosable: true }, this.props.loader));
    }
}

//# sourceMappingURL=Layout.js.map
exports.default = react_apollo_1.compose(react_apollo_1.graphql(Document.get('hello')), react_apollo_1.graphql(Document.get('helloWorld')), react_redux_1.connect(props => props.layout))(Layout);