import * as React from 'react';
import * as classnames from 'classnames';



export default (props: {onClose?: Function, setModal?: Function, children?: any, unclosable?: boolean }) => {
    if (!props.children) return null;

    const close = (e: MouseEvent) => {
        e.preventDefault();
        const clickedElement: any = e.target;
        if (clickedElement.id === "wrapper") {
            if (props.onClose) props.onClose();
            if (props.setModal) props.setModal(false);
        }
    }

    return (
        <div
            id="wrapper"
            className={ classnames('modal', { unclosable: props.unclosable } ) }
            onClick={(e: any) => props.unclosable ? '' : close(e) }
        >
            {props.children}
        </div>
    );
}

import './Modal.scss';