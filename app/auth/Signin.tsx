import * as React from 'react'

import { reduxForm, FormProps } from 'redux-form';




export class Signin extends React.Component< FormProps<FormData any, any >, any > {


    render(): React.ReactElement< * > {
        return (
            <form className="signin">

            </form>
        );
    }
}


const validate = values => {
    const errors = {};
    if (!values.username) errors["username"] = "Required";
    else if ( values.username.length > 15 ) errors["username"] = "Must be 15 characters or less";

}


export default reduxForm({
    form: 'signin',
    validate
})(Signin)