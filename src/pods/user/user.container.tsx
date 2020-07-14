import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { switchRoutes } from 'router';
import { UserComponent } from './user.component';

export const UserContainer: React.FunctionComponent = () => {
  const history = useHistory();

  const navigateToLogin = () => {
    history.push(switchRoutes.login);
  };

  const handleLogout = (): void => {
    navigateToLogin();
  };

  return <UserComponent handleLogout={handleLogout} />;
};
