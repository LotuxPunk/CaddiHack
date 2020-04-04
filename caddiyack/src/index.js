import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import MainPage from './Pages/MainPage'
import HomePage from './Pages/HomePage'
import AccountPage from './Pages/AccountPage'
import ChoicePage from './Pages/ChoicePage'
import './api';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path={'/'} component={HomePage}/>
      <Route exact path={'/shops'} component={MainPage}/>
      <Route exact path={'/choice'} component={ChoicePage}/>
      <Route exact path={'/account'} component={AccountPage}/>
    </Switch>
  </Router>
)



ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
