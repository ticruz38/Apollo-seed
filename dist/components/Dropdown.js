"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames = require("classnames");
class Dropdown extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { expand: false };
    }
    expand() {
        const list = this.refs['list'];
        this.setState({ expand: !this.state.expand }, () => list.focus());
    }
    render() {
        return (React.createElement("div", { className: "dropdown", style: { justifyContent: this.props.align === 'right' ? 'flex-end' : 'flex-start' } },
            React.createElement("span", { onClick: _ => this.expand() }, this.props.button),
            React.createElement("div", { ref: 'list', tabIndex: -1, className: classnames("dropdown-list", { hidden: !this.state.expand }), onBlur: _ => setTimeout(_ => this.setState({ expand: false }), 100) }, this.props.list.map((l, i) => React.createElement("div", { key: i, style: { justifyContent: this.props.align === 'right' ? 'flex-end' : 'flex-start' } }, l)))));
    }
}
exports.default = Dropdown;
require("./Dropdown.scss");
//# sourceMappingURL=/Users/tduchene/Code/apollo/components/Dropdown.js.map