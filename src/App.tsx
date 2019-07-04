import * as React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components//Header/Header';
import Root from './components/Root/Root';
import Profile from './components/Profile/Profile';

const App = () => (
  <div id="react-app">
    <Header title="ちゃんレタス" />
    <div id="contents">
      <Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  </div>
);

export default App;
