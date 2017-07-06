"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom/server");
const react_router_1 = require("react-router");
const react_apollo_1 = require("react-apollo");
const redux_1 = require("redux");
const express_1 = require("express");
//app
const app_1 = require("dist/app");
const layout_1 = require("dist/app/layout");
const Html_1 = require("../Html");
const config_1 = require("config");
const renderer = express_1.Router();
renderer.use((req, res) => {
    // console.log('hello req', req.headers)
    const client = new react_apollo_1.ApolloClient({
        ssrMode: true,
        // Remember that this is the interface the SSR server will use to connect to the
        // API server, so we need to ensure it isn't firewalled, etc
        networkInterface: react_apollo_1.createNetworkInterface({
            uri: config_1.default.API_URL + '/graphql',
            opts: {
                credentials: 'same-origin',
                // transfer request headers to networkInterface so that they're accessible to proxy server
                // Addresses this issue: https://github.com/matthew-andrews/isomorphic-fetch/issues/83
                headers: Object.assign({}, req.headers, { accept: 'application/json' })
            }
        })
    });
    const store = redux_1.createStore(redux_1.combineReducers({
        layout: layout_1.LayoutReducer,
        apollo: client.reducer()
    }), {});
    const context = {};
    const app = React.createElement(react_apollo_1.ApolloProvider, { store: store, client: client }, React.createElement(react_router_1.StaticRouter, { location: req.url, context: context }, React.createElement(app_1.App, null)));
    react_apollo_1.renderToStringWithData(app).then(content => {
        const initialState = { [client.reduxRootKey]: client.getInitialState() };
        const html = React.createElement(Html_1.default, { content: content, state: initialState });
        res.status(200);
        res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`);
        res.end();
    }).catch(error => console.error(error));
});
exports.default = renderer;
//# sourceMappingURL=index.js.map