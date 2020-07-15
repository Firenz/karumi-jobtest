import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { switchRoutes } from 'router';
import { UserComponent } from './user.component';
import { getLocalStoredTokenSession, clearLocalStoredTokenSession } from 'common/utils';

export const UserContainer: React.FunctionComponent = () => {
  const history = useHistory();

  const navigateToLogin = () => {
    history.push(switchRoutes.login);
  };

  const handleLogout = (): void => {
    clearLocalStoredTokenSession();
    navigateToLogin();
  };

  React.useEffect(() => {
    const localStoredTokenSession = getLocalStoredTokenSession();
    if(localStoredTokenSession == null) {
      navigateToLogin();
    }
  }, []);

  return <UserComponent handleLogout={handleLogout} />;
};
