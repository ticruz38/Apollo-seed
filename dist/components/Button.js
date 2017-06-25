"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* @flow */
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const classNames = require("classnames");
class Button extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { loading: false };
        this._onClick = e => {
            if (this.props.fileUpload) return this.refs.fileInput['click'](e);
            if (!this.props.action) return;
            const action = this.props.action();
            if (action instanceof Promise) {
                this.setState({ loading: true });
                action.then(res => {
                    this.setState({ loading: false });return res;
                });
            }
        };
    }
    get icon() {
        return this.state.loading ? React.createElement("i", { className: "material-icons loading" }, "cached") : this.props.icon || null;
    }
    get message() {
        if (!this.props.message) return null;
        return React.createElement("span", null, this.props.message);
    }
    render() {
        const El = this.props.to ? react_router_dom_1.Link : 'button';
        return React.createElement(El, { className: classNames('react-btn', this.props.className, this.props.mode, this.props.size, { disabled: this.props.disabled,
                appear: this.props.appear }), onClick: this._onClick, disabled: this.props.disabled, to: this.props.to }, this.icon, " ", this.message || null, this.props.fileUpload ? React.createElement("input", { type: "file", ref: "fileInput", onChange: e => {
                if (this.props.action) this.props.action(e);
            } }) : null);
    }
}
Button.defaultProps = {
    size: 'medium',
    mode: 'default'
};

//# sourceMappingURL=Button.js.map
exports.default = Button;