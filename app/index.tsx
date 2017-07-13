import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Link} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider }   from 'react-redux';

// app
import { Layout, LayoutReducer } from './layout';



const store: any = createStore(
    combineReducers({
        layout: LayoutReducer,
    }),
    {}
)

export const App = () => <Route path="/" component={ () => <span>hello Wld</span> } />

export default (
    <Provider store={store} >
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);