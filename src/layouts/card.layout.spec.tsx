import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CardLayout } from './card.layout';

afterEach(cleanup);

describe('Card layout specs', () => {
  it('should render', () => {
    //Act
    const { getByText } = render(<CardLayout>Text</CardLayout>);
    const layoutElement = getByText('Text') as HTMLElement;

    //Assert
    expect(layoutElement).toBeInTheDocument();
  });
});
