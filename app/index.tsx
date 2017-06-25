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

const routes = (
    <ApolloProvider store={store} client={client} >
        <HashRouter>
            <Route path="/" component={ props => <Layout {...props} /> } />
        </HashRouter>
    </ApolloProvider>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
)

export default routes;