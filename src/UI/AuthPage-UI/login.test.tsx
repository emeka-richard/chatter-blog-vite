import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from './Login-UI/Login-Form';
import { signInWithEmailAndPassword,
     getAuth as mockGetAuth 
    } from 'firebase/auth';
import { 
    // auth, 
    DB 
} from '../../Firebase-Tools/firebase';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { useNavigate } from 'react-router-dom';

// vi.mock('firebase/auth', () => ({
//   signInWithEmailAndPassword: vi.fn(),
//   mockGetAuth: vi.fn()
// }));

vi.mock('firebase/auth', async (importOriginal) => {
    const actual = await importOriginal()
    return {
      actual,
      signInWithEmailAndPassword: vi.fn(),
    // mockSendEmailVerification: vi.fn(),
    // mockUpdateProfile: vi.fn(),
    getAuth: vi.fn(),
    mockGetAuth: vi.fn()
  }});

vi.mock('react-router-dom',async (importOriginal) => {
    const actual = await importOriginal()
    return {
      actual,
  useNavigate: vi.fn(),
}});
// vi.mock('../../Firebase-Tools/firebase', ()=>{
//     DB: vi.fn()
// })

describe('LoginForm', () => {
  afterEach(() => {
    // Clear mocks before each test
    vi.clearAllMocks();
  });

  it('renders login form', () => {
    render(<LoginForm />);
    expect(screen.getByRole('form')).toBeTruthy();
  });

  it('handles form submission successfully', async () => {
    const userData = {
        firstName: 'John',
        lastName: 'Doe',
        userType: 'writer',
        email: 'john@example.com',
        password: 'password',
      };

    const navigateMock = vi.fn();
    useNavigate.call(navigateMock);

    // Mock Firebase signInWithEmailAndPassword function
    signInWithEmailAndPassword.call({ user: { uid: 'fakeUserId' } }, mockGetAuth(DB), userData.email, userData.password);

    render(<LoginForm />);

    // Simulate user input
    fireEvent.change(screen.getByTestId('email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'password123' } });

    // Simulate form submission
    fireEvent.submit(screen.getByRole('form'));

    // Wait for async tasks to complete
    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(mockGetAuth(DB), 'test@example.com', 'password123');
    });
  });

});
