import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Link} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'

// app
import { Layout, LayoutReducer } from './layout';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://localhost:3000/graphql',
    })
})

const store: any = createStore(
    combineReducers({
        layout: LayoutReducer,
        apollo: client.reducer()
    }),
    {}, // initial state
    compose(
        applyMiddleware(client.middleware())
        // If you are using the devToolsExtension, you can add it here also
        //   (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
)

export const App = () => <Route path="/" component={ Layout } />

export default (
    <ApolloProvider store={store} client={client} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
);