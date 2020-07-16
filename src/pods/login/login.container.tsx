import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { switchRoutes } from 'router';
import {
  LoginEntityVm,
  createEmptyLogin,
  SessionContext,
  validateCredentials,
  validateSession,
  mapperApiToVm,
} from 'core';
import { clearSavedData } from 'common/utils';
import { LoginComponent } from './login.component';

export const LoginContainer = () => {
  const history = useHistory();
  const [initialLogin] = React.useState<LoginEntityVm>(createEmptyLogin());
  const [loading, setLoading] = React.useState<boolean>(true);
  const { tokenSession, updateLogin, updateTokenSession } = React.useContext(
    SessionContext
  );

  const navigateToUser = (loginInfo: LoginEntityVm) => {
    updateLogin(loginInfo.login);
    history.push(switchRoutes.logged);
  };

  const handleLogin = (loginInfo: LoginEntityVm) => {
    setLoading(true);
    validateCredentials(loginInfo.login, loginInfo.password)
      .then((tokenSession) => {
        setLoading(false);
        updateTokenSession(tokenSession);
        navigateToUser(loginInfo);
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  React.useEffect(() => {
    setLoading(true);
    validateSession(tokenSession)
      .then((response) => {
        setLoading(false);
        if (
          response.tokenSession !== '' &&
          response.tokenSession === tokenSession
        ) {
          navigateToUser(mapperApiToVm(response));
        }
      })
      .catch(() => {
        setLoading(false);
        clearSavedData();
      });
  }, []);

  return (
    <LoginComponent
      onLogin={handleLogin}
      initialLogin={initialLogin}
      loadingState={loading}
    />
  );
};
