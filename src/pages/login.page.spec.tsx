import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { LoginPage } from './login.page';

afterEach(cleanup);

describe('Login page specs', () => {
  it('should display page', () => {
    //Act
    const { getByTestId } = render(<LoginPage />);
    const pageElement = getByTestId('login-page') as HTMLElement;

    //Assert
    expect(pageElement).toBeInTheDocument();
  });
});
