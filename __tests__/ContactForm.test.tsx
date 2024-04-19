import { render, screen } from '@testing-library/react';
import ContactForm from '../app/components/ui/ContactForm';

describe('ContactForm - Rendering', () => {
  it('should have form', () => {
    // screen.debug();
    render(<ContactForm />);
    const contactForm = screen.getByRole('form', { name: 'contact-form' });
    expect(contactForm).toBeInTheDocument();
  });
});
