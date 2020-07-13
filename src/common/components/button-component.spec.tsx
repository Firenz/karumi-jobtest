import * as React from 'react';
import { render, fireEvent, act, cleanup } from '@testing-library/react';
import { ButtonComponent } from './button.component';

afterEach(cleanup);

describe('Button component specs', () => {
  it('should display', () => {
    //Arrange
    const props = {
      'data-testid': 'button',
    };

    //Act
    const { getByTestId } = render(<ButtonComponent {...props}>Text</ButtonComponent>);
    const btnElement = getByTestId('button') as HTMLElement;

    //Assert
    expect(btnElement).toBeInTheDocument();
  });
  it('should call onClick method on clicked', () => {
    //Arrange
    const props = {
      children: 'text',
      'data-testid': 'button',
      onClick: jest.fn(),
    };

    //Act
    const { getByTestId } = render(<ButtonComponent {...props}>Text</ButtonComponent>);
    const btnElement = getByTestId('button') as HTMLElement;

    fireEvent.click(btnElement);

    //Assert
    expect(btnElement).toBeInTheDocument();
    expect(props.onClick).toHaveBeenCalled();
  });
});
