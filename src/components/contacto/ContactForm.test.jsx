import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { describe, test, expect } from 'jest';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  test('renders the form fields correctly', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/Nombre Completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ciudad/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo Electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Número Telefónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
  });

  test('shows validation errors on submit with empty fields', async () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByText(/Enviar mensaje/i));

    await waitFor(() => {
      expect(screen.getByText(/Nombre requerido/i)).toBeInTheDocument();
      expect(screen.getByText(/Ciudad requerida/i)).toBeInTheDocument();
      expect(screen.getByText(/Correo electrónico requerido/i)).toBeInTheDocument();
      expect(screen.getByText(/Número telefónico requerido/i)).toBeInTheDocument();
      expect(screen.getByText(/Mensaje requerido/i)).toBeInTheDocument();
    });
  });

  test('submits the form with valid data', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Nombre Completo/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Ciudad/i), { target: { value: 'New York' } });
    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Número Telefónico/i), { target: { value: '+1234567890' } });
    fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: 'Hello, this is a test message.' } });

    fireEvent.click(screen.getByText(/Enviar mensaje/i));

    await waitFor(() => {
      expect(screen.queryByText(/Nombre requerido/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Ciudad requerida/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Correo electrónico requerido/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Número telefónico requerido/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Mensaje requerido/i)).not.toBeInTheDocument();
    });
  });
});