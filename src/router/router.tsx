import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { LoginPage, UserPage } from 'pages';

export const Router: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
