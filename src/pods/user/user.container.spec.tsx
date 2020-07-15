import * as React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import {
  render,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react';
import { SessionProvider } from 'core';
import { LoginPage } from 'pages';
import { UserContainer } from './user.container';

const renderWithRouter = (component: any) => {
  return {
    ...render(
      <ReactRouterDom.HashRouter>
        <ReactRouterDom.Switch>
          <ReactRouterDom.Route path="/login" component={LoginPage} />
        </ReactRouterDom.Switch>
        <SessionProvider>{component}</SessionProvider>
      </ReactRouterDom.HashRouter>
    ),
  };
};

describe('User container specs', () => {
  it('should navigate to login page when logout button is clicked', async () => {
    // Assert
    const mockHistoryPush = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom') as typeof ReactRouterDom,
      useHistory: () => ({
        push: mockHistoryPush
      })
    }));
    
    //Act
    const { getByTestId } = renderWithRouter(<UserContainer />);
    const buttonElement = getByTestId('logout-button');

    await waitFor(() => {
      fireEvent.click(buttonElement);
    });

    const userPageElement = await waitFor(() =>
      getByTestId('login-page')
    );

    //Assert
    expect(userPageElement).toBeInTheDocument();
    expect(mockHistoryPush).toHaveBeenCalled();
  });
});

afterEach(cleanup);
