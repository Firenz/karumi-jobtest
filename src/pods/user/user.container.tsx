import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { switchRoutes } from 'router';
import { clearLocalStoredTokenSession, checkValidityLocalStoredTokenSession } from 'common/utils';
import { UserComponent } from './user.component';

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
    if(!checkValidityLocalStoredTokenSession()) {
      navigateToLogin();
    }
  }, []);

  return <UserComponent handleLogout={handleLogout} />;
};
