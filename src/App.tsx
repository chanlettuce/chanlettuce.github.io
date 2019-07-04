import * as React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components//Header/Header';
import Root from './components/Root/Root';
import Profile from './components/Profile/Profile';

import ReactGA from 'react-ga';
const pathname = window.location.pathname;
ReactGA.initialize('UA-120838241-3');
ReactGA.set({ page: pathname });
ReactGA.pageview(pathname);

const App = () => (
  <HashRouter>
    <div id="react-app">
      <Header title="ちゃんレタス" />
      <div id="contents">
        <Switch>
          <Route exact path="/" component={Root} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  </HashRouter>
);

export default App;
