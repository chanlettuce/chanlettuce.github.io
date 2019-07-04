import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ReactGA from 'react-ga';
import App from './App';
import * as serviceWorker from './serviceWorker';

const pathname = '/';
ReactGA.initialize('UA-120838241-3');
ReactGA.set({ page: pathname });
ReactGA.pageview(pathname);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
