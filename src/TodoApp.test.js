import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoApp from './TodoApp';

test('can add a new TODO', () => {
  render(<TodoApp />);

  const input = screen.getByPlaceholderText('New Todo');
  input.value = "A demo TODO"

  userEvent.click(screen.getByText('Add'))

  expect(screen.getByText('A demo TODO')).toBeInTheDocument()
  expect(input.value).toBe('')
});
