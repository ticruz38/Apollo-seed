import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { ApolloClient, ApolloProvider } from 'react-apollo'

// app
import Layout from './layout/Layout';
import { todoReducer, userReducer } from './reducers'

const client = new ApolloClient()

const store: any = createStore(
    combineReducers({
        todos: todoReducer,
        users: userReducer,
        apollo: client.reducer()
    }),
    {}, // initial state
    compose(
        applyMiddleware(client.middleware())
        // If you are using the devToolsExtension, you can add it here also
        //   (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
)

ReactDOM.render(
    <ApolloProvider store={store} client={client} >
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('content')
)
