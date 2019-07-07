import React, { Fragment } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Root from '../components/Root/Root';
import Profile from '../components/Profile/Profile';
import JsonSorter from '../components/JsonSorter/JsonSorter';

const routesGetter = ({ children: Children }: any) => {
  return withRouter(routesProps => {
    return (
      <Fragment>
        <Children {...routesProps} />
        <Switch>
          <Route exact path="/" component={Root} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/tools/jsonsorter" component={JsonSorter} />
        </Switch>
      </Fragment>
    );
  });
};

export default routesGetter;
