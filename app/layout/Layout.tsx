import * as React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { graphql, withApollo, compose } from 'react-apollo'
import * as classnames from 'classnames'

import * as actions from './LayoutReducer'
import { DocumentParser } from 'utils';
import { Button, Modal, Dropdown } from '../../components'

// import LayoutQuery from './Layout.gql';
const Document = new DocumentParser(require('./Layout.gql'));

class Layout extends React.Component<any, any> {
    get backButton() {
        return (
            <Button
                message={this.props.backRoute}
                icon={<i className="material-icons">keyboard_arrow_left</i>}
                to={this.props.backRoute}
                className={classnames('back-button', { hidden: !this.props.backRoute })}
            />
        )
    }

    get signin() {
        if( this.props.location.pathname !== this.props.match.url + "signin" ) return null;
        return <span>Signin</span>
    }

    get signup() {
        if( this.props.location.pathname !== this.props.match.url + "signup" ) return null;
        return <span>Signup</span>
    }

    get icon() {
        return <Button to="/rooms" icon={<i className="material-icons">weekend</i>} className="app-icon" appear />
    }

    render() {
        return (
            <div className="layout">
                <div className={classnames({ blur: this.props.modal || this.props.loader })}>
                    <div
                        className="background"
                        style={{
                            backgroundImage: this.props.backgroundImage
                                ? 'url(' + this.props.backgroundImage + ')'
                                : 'none'
                        }}
                    />
                    <header className="navigation">
                        <div className="left-items">
                            {this.icon}
                            <div className="title">
                                {this.props.title}
                            </div>
                            {this.backButton}
                            <div className="toolbar">
                                {this.props.toolbar}
                            </div>
                        </div>
                        <div className="right-items">
                            <div className="auth">
                                <Dropdown
                                    button={
                                        <Button
                                            message="Log-In"
                                            to="signin"
                                        />
                                    }
                                    list={[]}
                                />
                            </div>
                        </div>
                    </header>
                    <div className="body">
                        <Route path={this.props.match.url} />
                    </div>
                </div>
                <Modal onClose={_ => this.props.dispatch(actions.toggleModal())}>
                    {this.props.modal}
                </Modal>
                <Modal onClose={_ => this.props.history.goBack() }>
                    { this.signup }
                </Modal>
                <Modal onClose={_ => this.props.history.goBack() }>
                    { this.signin }
                </Modal>
                <Modal unclosable>
                    {this.props.loader}
                </Modal>
            </div>
        )
    }
}

export default compose(
    graphql(Document.get("hello"), { name: 'hello'}),
    connect(props => props.layout),
    graphql(Document.get("helloWorld"), { name: 'helloWorld'})
)(Layout)
import './Layout.scss'
