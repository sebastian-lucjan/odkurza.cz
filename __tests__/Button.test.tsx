import { render, screen } from '@testing-library/react';
import Button from '../app/components/ui/Button';

describe('Button - Rendering', () => {
  it('should have Button with text Click me, and href attr', () => {
    render(<Button text="Click me" href="/equipment" />);

    const button = screen.getByRole('button', { name: 'Click me' });
    const buttonLink = screen.getByRole('link');

    expect(button).toBeInTheDocument();
    expect(buttonLink).toHaveAttribute('href', '/equipment');
  });

  it('should have Button with text Click me [text as child], and href attr', () => {
    render(
      <Button href="/contact" asHref="/kontakt">
        <p>Click me</p>
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toHaveAttribute('type', 'button');

    const paragraph = screen.getByRole('paragraph');
    expect(paragraph).toBeInTheDocument();

    expect(button.closest('a')).toHaveAttribute('href', '/kontakt');
  });
});
