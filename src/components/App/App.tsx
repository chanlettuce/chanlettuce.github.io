import React from 'react';
import { HashRouter, RouteComponentProps } from 'react-router-dom';
import ReactGA from 'react-ga';

import '@/css/components/App.css';

import Header from '@/components/Header/Header';
import routesGetter from '@/components/Routes/Routes';

const Analitics = (props: RouteComponentProps) => {
  const loc = props.location;
  ReactGA.pageview(`${loc.pathname}${loc.search}${loc.hash}`);
  return null;
};

const Routes = routesGetter({ children: Analitics });

class App extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);

    ReactGA.initialize('UA-120838241-4', { debug: process.env.ENV === 'dev' });
  }

  render() {
    return (
      <HashRouter>
        <div id="react-app">
          <Header title="ちゃんレタス" />
          <div id="contents">
            <Routes />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
