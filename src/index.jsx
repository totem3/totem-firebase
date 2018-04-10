import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./containers/app";
import Calc from "./containers/calc";
import Memos from "./containers/memos";
import Memo from "./containers/memo";
import reducer from './reducers';
import css from './styles/app.css';

import createHistory from 'history/createBrowserHistory'
import { Route } from "react-router";

import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux";


const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    calc: reducer,
    routing: routerReducer,
  }),
  applyMiddleware(middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App}>
        </Route>
        <Route path="/calc" component={Calc} />
        <Route path="/memos" component={Memos} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
