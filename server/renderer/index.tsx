import * as React from 'react'
import * as ReactDOM from 'react-dom/server'
import { match, StaticRouter } from 'react-router'
import { ApolloClient, createNetworkInterface, ApolloProvider, renderToStringWithData } from 'react-apollo'
import { createStore, combineReducers } from 'redux'
import { Router } from 'express'
//app
import { App } from 'dist/app'
import { LayoutReducer } from 'dist/app/layout'

import Html from '../Html'
import config from 'config'

const renderer = Router()

renderer.use((req, res) => {
    // console.log('hello req', req.headers)
    const client: any = new ApolloClient({
        ssrMode: true,
        // Remember that this is the interface the SSR server will use to connect to the
        // API server, so we need to ensure it isn't firewalled, etc
        networkInterface: createNetworkInterface({
            uri: config.API_URL + '/graphql',
            opts: {
                credentials: 'same-origin',
                // transfer request headers to networkInterface so that they're accessible to proxy server
                // Addresses this issue: https://github.com/matthew-andrews/isomorphic-fetch/issues/83
                headers: { ...req.headers, accept: 'application/json' }
            }
        })
    })

    const store: any = createStore(
        combineReducers({
            layout: LayoutReducer,
            apollo: client.reducer()
        }), {} 
    )

    const context = {}
    
    const app = (
        <ApolloProvider store={store} client={client}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </ApolloProvider>
    )

    renderToStringWithData(app)
        .then(content => {
            const initialState = { [client.reduxRootKey]: client.getInitialState() }
            const html = <Html content={content} state={initialState} />
            res.status(200)
            res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`)
            res.end()
        })
        .catch(error => console.error(error))
})

export default renderer
