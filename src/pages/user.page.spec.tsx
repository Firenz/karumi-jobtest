import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { UserPage } from './user.page';

describe('User page specs', () => {
  it('should display page', () => {
    //Act
    const { getByTestId } = render(<UserPage />);
    const pageElement = getByTestId('user-page') as HTMLElement;

    //Assert
    expect(pageElement).toBeInTheDocument();
  });
});

afterEach(cleanup);