import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('does not render the dashboard if the user is not logged in', () => {
    render(<App />);
    const dashboardElement = screen.queryByText(/Welcome to the College Event Manager/i);
    expect(dashboardElement).toBeInTheDocument();
  });

  it('shows login buttons when the user is not logged in', () => {
    render(<App />);
    const studentLoginButton = screen.getByText(/Login as Student/i);
    const adminLoginButton = screen.getByText(/Login as Admin/i);
    expect(studentLoginButton).toBeInTheDocument();
    expect(adminLoginButton).toBeInTheDocument();
  });

  it('shows the dashboard after the user logs in', async () => {
    render(<App />);
    const studentLoginButton = screen.getByText(/Login as Student/i);
    fireEvent.click(studentLoginButton);

    const dashboardElement = await screen.findByText(/Welcome Back!/i);
    expect(dashboardElement).toBeInTheDocument();
  });
});
