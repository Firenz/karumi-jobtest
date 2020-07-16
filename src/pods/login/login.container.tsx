import * as React from 'react';
import { useHistory } from 'react-router-dom';
import {
  LoginEntityVm,
  createEmptyLogin,
  SessionContext,
  validateCredentials,
} from 'core';
import { switchRoutes } from 'router';
import { LoginComponent } from './login.component';
import {
  clearLocalStoredTokenSession,
  checkValidityLocalStoredTokenSession,
} from 'common/utils';

export const LoginContainer = () => {
  const history = useHistory();
  const [initialLogin] = React.useState<LoginEntityVm>(createEmptyLogin());
  const { updateLogin } = React.useContext(SessionContext);
  const { updateTokenSession } = React.useContext(SessionContext);

  const navigateToUser = (loginInfo: LoginEntityVm) => {
    updateLogin(loginInfo.login);
    history.push(switchRoutes.logged);
  };

  const handleLogin = (loginInfo: LoginEntityVm) => {
    validateCredentials(loginInfo.login, loginInfo.password)
      .then((tokenSession) => {
        updateTokenSession(tokenSession);
        navigateToUser(loginInfo);
      })
      .catch((error) => alert(error));
  };

  React.useEffect(() => {
    if (checkValidityLocalStoredTokenSession()) {
      history.push(switchRoutes.logged);
    } else {
      clearLocalStoredTokenSession();
    }
  }, []);

  return <LoginComponent onLogin={handleLogin} initialLogin={initialLogin} />;
};
