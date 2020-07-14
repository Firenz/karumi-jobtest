import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CardContentBodyLayout } from './card-content-body.layout';

afterEach(cleanup);

describe('Card Content Body layout specs', () => {
  it('should render', () => {
    //Act
    const { getByText } = render(<CardContentBodyLayout>Text</CardContentBodyLayout>);
    const layoutElement = getByText('Text') as HTMLElement;

    //Assert
    expect(layoutElement).toBeInTheDocument();
  });
});
