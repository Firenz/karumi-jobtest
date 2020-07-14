import * as React from 'react';
import { useHistory } from 'react-router-dom';
import {
  LoginEntityVm,
  createEmptyLogin,
  SessionContext,
  validateCredentials,
} from 'core';
import { linkRoutes } from 'router';
import { LoginComponent } from './login.component';

export const LoginContainer = () => {
  const history = useHistory();
  const [initialLogin] = React.useState<LoginEntityVm>(createEmptyLogin());
  const { updateLogin } = React.useContext(SessionContext);

  const navigateToUser = (loginInfo: LoginEntityVm) => {
    updateLogin(loginInfo.login);
    history.push(linkRoutes.logged);
  };

  const handleLogin = (loginInfo: LoginEntityVm) => {
    validateCredentials(loginInfo.login, loginInfo.password).then(
      (areValidCredentials) => {
        areValidCredentials
          ? navigateToUser(loginInfo)
          : alert('Invalid credentials, use admin@mail.com/test for testing purposes.');
      }
    );
  };

  return <LoginComponent onLogin={handleLogin} initialLogin={initialLogin} />;
};
