"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames = require("classnames");
exports.default = (props) => {
    if (!props.children)
        return null;
    const close = (e) => {
        e.preventDefault();
        const clickedElement = e.target;
        if (clickedElement.id === "wrapper") {
            if (props.onClose)
                props.onClose();
            if (props.setModal)
                props.setModal(false);
        }
    };
    return (React.createElement("div", { id: "wrapper", className: classnames('modal', { unclosable: props.unclosable }), onClick: (e) => props.unclosable ? '' : close(e) }, props.children));
};
//# sourceMappingURL=/Users/tduchene/Code/apollo/components/Modal.js.map