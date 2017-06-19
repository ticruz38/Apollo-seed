"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Loader_1 = require("./visuals/Loader");
const initialState = {
    modal: false,
    loading: false,
    toolbar: null,
    loader: React.createElement(Loader_1.default, { size: "3em" }),
};
exports.toggleModal = (bool) => ({ type: "TOGGLE_MODAL", value: bool });
exports.toggleLoading = (bool) => ({ type: "TOGGLE_LOADING", value: bool });
exports.setToolbar = (toolbar) => ({ type: "TOGGLE_MODAL", value: toolbar });
exports.default = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_MODAL":
            return Object.assign({}, state, { modal: action.value });
        case "TOGGLE_LOADING":
            return Object.assign({}, state, { loading: action.value });
        case "SET_TOOLBAR":
            return Object.assign({}, state, { toolbar: action.value });
    }
};
//# sourceMappingURL=/Users/tduchene/Code/apollo/app/layout/LayoutReducer.js.map