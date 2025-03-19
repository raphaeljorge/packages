import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeDefined();
  });

  it('handles click events', () => {
    let clicked = false;
    const { getByText } = render(
      <Button onClick={() => (clicked = true)}>Click me</Button>
    );
    
    fireEvent.click(getByText('Click me'));
    expect(clicked).toBe(true);
  });

  it('applies variant classes correctly', () => {
    const { container } = render(<Button variant="secondary">Click me</Button>);
    expect(container.firstChild).toHaveClass('secondary');
  });
});