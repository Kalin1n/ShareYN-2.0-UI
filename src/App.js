import React from 'react';
import createHistory from "history/createBrowserHistory";

import { Router, Switch, Route } from 'react-router';

import Homepage from "./Components/Homepage";
import Authpage from "./Components/Auth";
import UserPage from './Components/Userpage/index.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "./Store/reducer.js";
// create store 

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={createHistory()}> 
          <Switch>
            <Route path="/" component={Homepage} exact/>
            <Route path="/auth" component={Authpage} exact/>
            <Route path="/write" exact/>
            <Route path="/read" exact/>
            <Route path="/user" component={UserPage} exact/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
