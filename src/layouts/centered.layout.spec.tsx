import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CenteredLayout } from './centered.layout';

afterEach(cleanup);

describe('Centered layout specs', () => {
  it('should render', () => {
    //Act
    const { getByText } = render(<CenteredLayout>Text</CenteredLayout>);
    const layoutElement = getByText('Text') as HTMLElement;

    //Assert
    expect(layoutElement).toBeInTheDocument();
  });
});
