import * as React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import {
  render,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react';
import { SessionProvider, validateCredentials } from 'core';
import * as api from 'core/api';
import { LoginContainer } from './login.container';
import { UserPage } from 'pages';
import { randomizeString } from 'common';

const renderWithRouter = (component: any) => {
  return {
    ...render(
      <ReactRouterDom.HashRouter>
        <ReactRouterDom.Switch>
          <ReactRouterDom.Route path="/logged" component={UserPage} />
        </ReactRouterDom.Switch>
        <SessionProvider>{component}</SessionProvider>
      </ReactRouterDom.HashRouter>
    ),
  };
};

describe('login container specs', () => {
  xit('should call validate credentials when submitted login info', async () => {
    const validateCredentials = jest.fn().mockResolvedValue(true);
    jest.mock('core/api', () => ({
      ...jest.requireActual('core/api') as typeof api,
      validateCredentials
    }));
    // const validateCredentialsStub = jest
    //   .spyOn(api, 'validateCredentials')
    //   .mockResolvedValue(true);
    const mockHistoryPush = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom') as typeof ReactRouterDom,
      useHistory: () => ({
        push: mockHistoryPush
      })
    }));

    //Act
    const { getByTestId } = renderWithRouter(<LoginContainer />);
    const buttonElement = getByTestId('login-button');

    await waitFor(() => {
      fireEvent.click(buttonElement);
    });

    const userPageElement = await waitFor(() =>
      getByTestId('user-page')
    );

    //Assert
    expect(userPageElement).toBeInTheDocument();
    expect(validateCredentials).toHaveBeenCalled();
    expect(mockHistoryPush).toHaveBeenCalled();
  });
});

afterEach(cleanup);