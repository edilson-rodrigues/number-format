import { render, screen, fireEvent } from '@testing-library/react';
import Money from '../Money';

describe('Money component', () => {
  test('should update input value when a new value is typed', () => {
    render(<Money />);
    const input = screen.getByLabelText('Money:');
    fireEvent.change(input, { target: { value: '1234.56' } });
    expect(input).toHaveValue('1.234,56');
  });

  test('should update input value with formatted money when a new value containing non-numeric characters is typed', () => {
    render(<Money />);
    const input = screen.getByLabelText('Money:');
    fireEvent.change(input, { target: { value: '1234.56SA' } });
    expect(input).toHaveValue('1.234,56');
  });

  test('should clear input value when a non-numeric value is typed', () => {
    render(<Money />);
    const input = screen.getByLabelText('Money:');
    fireEvent.change(input, { target: { value: 'Money' } });
    expect(input).toHaveValue('');
  });
});