import * as React from 'react';
import Loader from './visuals/Loader';

const initialState = {
    modal: null,
    loading: false,
    toolbar: null,
    loader: null,
}

export const toggleModal = (value?: React.ReactElement< any >) => ( { type: "TOGGLE_MODAL", value: value } );
export const toggleLoading = (bool: boolean) => ( { type: "TOGGLE_LOADING", value: bool } );
export const setToolbar = (toolbar?: React.ReactElement< any >) => ( { type: "TOGGLE_MODAL", value: toolbar } );


export default (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_MODAL":
            return { ...state, modal: action.value }
        case "TOGGLE_LOADING":
            return { ...state, loading: action.value }
        case "SET_TOOLBAR":
            return { ...state, toolbar: action.value }
        default: 
            return state
    }
}