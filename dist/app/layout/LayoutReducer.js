"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initialState = {
    modal: null,
    loading: false,
    toolbar: null,
    loader: null
};
exports.toggleModal = value => ({ type: "TOGGLE_MODAL", value: value });
exports.toggleLoading = bool => ({ type: "TOGGLE_LOADING", value: bool });
exports.setToolbar = toolbar => ({ type: "TOGGLE_MODAL", value: toolbar });
exports.default = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_MODAL":
            return Object.assign({}, state, { modal: action.value });
        case "TOGGLE_LOADING":
            return Object.assign({}, state, { loading: action.value });
        case "SET_TOOLBAR":
            return Object.assign({}, state, { toolbar: action.value });
        default:
            return state;
    }
};
//# sourceMappingURL=LayoutReducer.js.map