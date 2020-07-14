import * as React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { switchRoutes } from './routes';
import { LoginPage, UserPage } from 'pages';

export const Router: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.login]}
          component={LoginPage}
        />
        <Route
          path={switchRoutes.logged}
          component={UserPage}
        />
      </Switch>
    </HashRouter>
  );
};
