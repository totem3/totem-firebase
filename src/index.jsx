import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./containers/app";
import reducer from './reducers';
import css from './styles/app.css';
import { Route, Router, browserHistory } from 'react-router-dom';
import { syncHistoryWithStore, routerReducer } from "react-router-redux";


const store = createStore(
  combineReducers({
    reducer: reducer,
    routing: routerReducer,
  })
);

// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
