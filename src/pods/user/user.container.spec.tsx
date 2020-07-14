import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import {
  render,
  fireEvent,
  waitFor,
  waitForElement,
} from '@testing-library/react';
import { SessionProvider } from 'core';
import { LoginPage } from 'pages';
import { UserContainer } from './user.container';

const renderWithRouter = (component: any) => {
  return {
    ...render(
      <HashRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
        </Switch>
        <SessionProvider>{component}</SessionProvider>
      </HashRouter>
    ),
  };
};

describe('User container specs', () => {
  xit('should navigate to login page when logout button is clicked', async () => {
    //Act
    const { getByTestId } = renderWithRouter(<UserContainer />);
    const buttonElement = getByTestId('logout-button');

    await waitFor(() => {
      fireEvent.click(buttonElement);
    });

    const userPageElement = await waitForElement(() =>
      getByTestId('login-page')
    );

    //Assert
    expect(userPageElement).toBeInTheDocument();
  });
});
