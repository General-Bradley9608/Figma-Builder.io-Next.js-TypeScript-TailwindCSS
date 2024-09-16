// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import EmailVerification from './page';

// describe('EmailVerification', () => {
//   it('renders without crashing', () => {
//     render(<EmailVerification />);
//   });

//   it('displays the correct header text', () => {
//     render(<EmailVerification />);
//     expect(screen.getByText('PlayCV')).toBeInTheDocument();
//   });

//   it('displays the email icon', () => {
//     render(<EmailVerification />);
//     expect(screen.getByLabelText('Email icon')).toBeInTheDocument();
//   });

//   it('displays the verification message', () => {
//     render(<EmailVerification />);
//     expect(screen.getByText('Check Your Inbox!')).toBeInTheDocument();
//   });

//   it('displays action buttons', () => {
//     render(<EmailVerification />);
//     expect(screen.getByText('Resend Email')).toBeInTheDocument();
//     expect(screen.getByText('Go back')).toBeInTheDocument();
//   });

//   it('displays the footer', () => {
//     render(<EmailVerification />);
//     expect(screen.getByText('© Play.CV 2024')).toBeInTheDocument();
//     expect(screen.getByText('support@playcv.com')).toBeInTheDocument();
//   });
// });