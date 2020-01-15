import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route as RouteComponent,
  Switch,
} from 'react-router-dom';

import ShowOverview from '../../routes/showOverview/ShowOverview';
import ShowEpisodes from '../../routes/showEpisodes/ShowEpisodes';
import { Route } from '../../enumerations/Route';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <RouteComponent exact path="/" render={() => <ShowOverview />} />
      <RouteComponent exact path="/episodes" render={() => <ShowEpisodes />} />
      <RouteComponent render={() => <Redirect to={Route.HOME} />} />
    </Switch>
  </BrowserRouter>
);
