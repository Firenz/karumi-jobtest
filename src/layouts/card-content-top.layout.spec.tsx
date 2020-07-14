import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CardContentTopLayout } from './card-content-top.layout';

afterEach(cleanup);

describe('Card Content Top layout specs', () => {
  it('should render', () => {
    //Act
    const { getByText } = render(<CardContentTopLayout>Text</CardContentTopLayout>);
    const layoutElement = getByText('Text') as HTMLElement;

    //Assert
    expect(layoutElement).toBeInTheDocument();
  });
});
