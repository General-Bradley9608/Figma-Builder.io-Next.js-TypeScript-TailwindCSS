import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialSignUp from '../SocialSignUp';

describe('SocialSignUp', () => {
  it('renders all social sign-up buttons', () => {
    render(<SocialSignUp />);
    expect(screen.getAllByRole('button')).toHaveLength(6);
  });

  it('displays the "Or" divider', () => {
    render(<SocialSignUp />);
    expect(screen.getByText('Or')).toBeInTheDocument();
  });

  it('shows the login link', () => {
    render(<SocialSignUp />);
    expect(screen.getByText('Log in')).toBeInTheDocument();
  });
});