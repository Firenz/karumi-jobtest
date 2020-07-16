import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { UserComponent } from './user.component';

describe('User component specs', () => {
  it('should render component', () => {
    //Arrange
    const props = {
      handleLogout: jest.fn(),
      loginInfo: '',
      loadingState: false
    };

    //Act
    const { getByTestId } = render(<UserComponent {...props} />);

    const userComponentElement = getByTestId('user-component');
    const textElement = getByTestId('text-component');
    const btnElement = getByTestId('logout-button');

    //Assert
    expect(userComponentElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
  });
  it('should call handleLogout when Logout button is clicked', async () => {
    //Arrange
    const props = {
      handleLogout: jest.fn(),
      loginInfo: '',
      loadingState: false
    };

    //Act
    const { getByTestId } = render(<UserComponent {...props} />);

    const userComponentElement = getByTestId('user-component');
    const textElement = getByTestId('text-component');
    const btnElement = getByTestId('logout-button');

    fireEvent.click(btnElement);

    //Assert
    expect(userComponentElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
    expect(props.handleLogout).toHaveBeenCalled();
  });
});

afterEach(cleanup);
