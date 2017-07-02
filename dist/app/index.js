"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const redux_1 = require("redux");
const react_apollo_1 = require("react-apollo");
// app
const layout_1 = require("./layout");
const client = new react_apollo_1.ApolloClient({
    networkInterface: react_apollo_1.createNetworkInterface({
        uri: 'http://localhost:3000/graphql'
    })
});
const store = redux_1.createStore(redux_1.combineReducers({
    layout: layout_1.LayoutReducer,
    apollo: client.reducer()
}), {}, // initial state
redux_1.compose(redux_1.applyMiddleware(client.middleware())
// If you are using the devToolsExtension, you can add it here also
//   (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
));
const routes = React.createElement(react_apollo_1.ApolloProvider, { store: store, client: client }, React.createElement(react_router_dom_1.BrowserRouter, null, React.createElement(react_router_dom_1.Route, { path: "/", component: layout_1.Layout })));
exports.default = routes;
//# sourceMappingURL=index.js.map