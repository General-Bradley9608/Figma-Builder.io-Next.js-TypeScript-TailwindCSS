import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUpForm from '../SignUpForm';

describe('SignUpForm', () => {
  it('renders all form fields', () => {
    render(<SignUpForm />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('displays the terms and conditions checkbox', () => {
    render(<SignUpForm />);
    expect(screen.getByRole('checkbox', { name: /I agree to Play.CV's Terms & Conditions/i })).toBeInTheDocument();
  });

  it('has a submit button', () => {
    render(<SignUpForm />);
    expect(screen.getByRole('button', { name: /Create account/i })).toBeInTheDocument();
  });
});