import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { switchRoutes } from 'router';
import { UserComponent } from './user.component';
import { validateSession, SessionContext } from 'core';

export const UserContainer: React.FunctionComponent = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState<boolean>(false);
  const {
    login,
    tokenSession,
    updateLogin,
    updateTokenSession,
  } = React.useContext(SessionContext);

  const navigateToLogin = () => {
    history.push(switchRoutes.login);
  };

  const handleLogout = (): void => {
    updateLogin('');
    updateTokenSession('');
    navigateToLogin();
  };

  React.useEffect(() => {
    setLoading(true);
    validateSession(tokenSession)
      .then(() => setLoading(false))
      .catch((error) => {
        console.warn(error);
        setLoading(false)
        navigateToLogin();
      });
  }, []);

  return <UserComponent handleLogout={handleLogout} loginInfo={login} loadingState={loading}/>;
};
