import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import {
  render,
  fireEvent,
  waitFor,
  waitForElement,
} from '@testing-library/react';
import { SessionProvider } from 'core';
import * as api from 'core/api';
import * as loginVm from 'core/model';
import { LoginContainer } from './login.container';
import { UserPage } from 'pages';

const renderWithRouter = (component: any) => {
  return {
    ...render(
      <HashRouter>
        <Switch>
          <Route path="/logged" component={UserPage} />
        </Switch>
        <SessionProvider>{component}</SessionProvider>
      </HashRouter>
    ),
  };
};

describe('login container specs', () => {
  xit('should call validate credentials when submitted login info', async () => {
    //Arrange
    const loginStub = jest.spyOn(loginVm, 'createEmptyLogin')
    .mockReturnValue({
      login: 'admin@mail.com',
      password: 'test',
    });
    const validateCredentialsStub = jest
      .spyOn(api, 'validateCredentials')
      .mockResolvedValue(true);

    //Act
    const { getByTestId } = renderWithRouter(<LoginContainer />);
    const buttonElement = getByTestId('login-button');

    await waitFor(() => {
      fireEvent.click(buttonElement);
    });

    const userPageElement = await waitForElement(() =>
      getByTestId('user-page')
    );

    //Assert
    expect(loginStub).toHaveBeenCalled();
    expect(validateCredentialsStub).toHaveBeenCalled();
    expect(userPageElement).toBeInTheDocument();
  });
});
