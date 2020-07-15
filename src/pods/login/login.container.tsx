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
import { generateTokenSession, getLocalStoredTokenSession } from 'common/utils';

export const LoginContainer = () => {
  const history = useHistory();
  const [initialLogin] = React.useState<LoginEntityVm>(createEmptyLogin());
  const { updateLogin } = React.useContext(SessionContext);
  const { tokenSession, updateTokenSession } = React.useContext(SessionContext);

  const createTokenSession = () => {
    const newTokenSession = generateTokenSession();
    updateTokenSession(newTokenSession);
  };

  const navigateToUser = (loginInfo: LoginEntityVm) => {
    createTokenSession();
    updateLogin(loginInfo.login);
    history.push(switchRoutes.logged);
  };

  const handleLogin = (loginInfo: LoginEntityVm) => {
    validateCredentials(loginInfo.login, loginInfo.password).then(
      (areValidCredentials) => {
        if (areValidCredentials) {
          navigateToUser(loginInfo);
        } else {
          alert(
            'Invalid credentials, use admin@mail.com/test for testing purposes.'
          );
        }
      }
    );
  };

  React.useEffect(() => {
    const localStoredTokenSession = getLocalStoredTokenSession();
    if (
      localStoredTokenSession != null &&
      localStoredTokenSession !== '' &&
      localStoredTokenSession === tokenSession
    ) {
      history.push(switchRoutes.logged);
    } else {
    }
  }, []);

  return <LoginComponent onLogin={handleLogin} initialLogin={initialLogin} />;
};
