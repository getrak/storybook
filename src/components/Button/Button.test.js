import { render, screen } from '@testing-library/react';
import { Button } from './Button'

test('Deve obter o botão com um rótulo específico', () => {
  render(<Button label="I am a button" />);
  const buttonElement = screen.getByText(/I am a button/i);
  expect(buttonElement).toBeInTheDocument();
});