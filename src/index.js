import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'jquery/dist/jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createStore } from 'redux'
import reducer from './reducers/reducers'
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { saveState, loadState } from './localStorage'

const store = createStore(reducer, loadState())

ReactDOM.render(
    <Provider store={store}><Router>
        <Route path="/:filter?" component={App}></Route>
        </Router></Provider>,
document.getElementById('root'));

store.subscribe(() => {
    saveState(store.getState())
  })

