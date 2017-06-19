import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { ApolloClient, ApolloProvider } from 'react-apollo'

// app
import { Layout, LayoutReducer } from './layout';

const client = new ApolloClient()

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
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </ApolloProvider>
);

ReactDOM.render(
    routes,
    document.getElementById('content')
)

export default routes;