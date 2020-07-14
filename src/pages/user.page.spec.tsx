import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { UserPage } from './user.page';

afterEach(cleanup);

describe('User page specs', () => {
  xit('should display page', () => {
    //Act
    const { getByTestId } = render(<UserPage />);
    const pageElement = getByTestId('user-page') as HTMLElement;

    //Assert
    expect(pageElement).toBeInTheDocument();
  });
});
