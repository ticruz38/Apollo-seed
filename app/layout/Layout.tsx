import * as React from 'react';
import classnames from 'classnames';

import { Button, Modal, Dropdown } from 'components';



export default class Layout extends React.Component<any, any> {

    get backButton() {
        return (
            <Button
                message={this.props.backRoute}
                icon={<i className="material-icons">keyboard_arrow_left</i>}
                to={this.props.backRoute}
                className={classnames('back-button', { hidden: !this.props.backRoute })}
            />
        );
    }

    get icon() {
        return (
            <Button
                to="/rooms"
                icon={<i className="material-icons">weekend</i>}
                className='app-icon'
                appear
            />
        );
    }

    render() {
        return (
            <div className='layout'>
                <div className={classnames({ blur: this.state.modal || this.state.loader })}>
                    <div className="background" style={{ backgroundImage: this.props.backgroundImage ? 'url(' + this.props.backgroundImage + ')' : 'none' }} />
                    <header className="navigation">
                        <div className="left-items">
                            {this.icon}
                            <div className="title">
                                {this.props.title}
                            </div>
                            {this.backButton}
                            <div className="toolbar">
                                {this.state.toolbar}
                            </div>
                        </div>
                        <div className="right-items">
                            <div className='auth'>
                                <Dropdown
                                    button={<Button message="Log-In" />}
                                    list={[]}
                                />
                            </div>
                        </div>
                    </header>
                    {this.props.children}
                </div>
                <Modal
                    onClose={this.props.onClose}
                    setModal={this.props.setModal}
                >
                    {this.state.modal}
                </Modal>
                <Modal unclosable>
                    {this.state.loader}
                </Modal>
            </div>
        )
    }
}


import './Layout.scss';