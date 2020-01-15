import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route as RouteComponent,
  Switch,
} from 'react-router-dom';

import ShowOverview from '../../routes/showOverview/ShowOverview';
import ShowEpisode from '../../routes/showEpisode/ShowEpisode';
import { Route } from '../../enumerations/Route';
import { useSelector } from 'react-redux';

export const Router = () => {
  const loading = useSelector(state => state.loading);

  if (loading) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <RouteComponent exact path="/" render={() => <ShowOverview />} />
        <RouteComponent
          path={Route.EPISODE_DETAIL_PAGE}
          render={params => <ShowEpisode {...params} />}
        />
        <RouteComponent render={() => <Redirect to={Route.HOME} />} />
      </Switch>
    </BrowserRouter>
  );
};
