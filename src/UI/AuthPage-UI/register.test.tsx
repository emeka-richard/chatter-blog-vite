import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterTitle from "./RegisterUIs/Register-Title";
import RegisterEmail from "./RegisterUIs/Register-Form-UIs/Register-Email";
import RegisterForm from "./RegisterUIs/Register-Form-UIs/Register-Form";
import { 
    createUserWithEmailAndPassword as mockCreateUserWithEmailAndPassword, 
    // sendEmailVerification as mockSendEmailVerification,
    // updateProfile as mockUpdateProfile,
    getAuth as mockGetAuth,
    // User
} from "firebase/auth";
import { DB, 
    // getAuth as mockGetAuth
 } from "../../Firebase-Tools/firebase"
// import { 
//     getFirestore as mockGetFirestore,
//     doc as mockDoc,
//     setDoc as mockSetDoc
// } from "firebase/firestore";

describe("Register Title", ()=>{
    it("Renders register title", ()=>{
        render(
            <BrowserRouter>
              <RegisterTitle />
            </BrowserRouter>
          );
          expect(screen.getByText("Register as a Writer/Reader")).toBeTruthy();
          screen.debug()
        })
})

describe('RegisterEmail component', () => {
    it('renders email input and label correctly', () => {
      const { getByLabelText, getByText } = render(<RegisterEmail setUserEmail={() => {}} />);
      const emailInput = getByLabelText('Email Address') as HTMLInputElement;
      const emailLabel = getByText('Email address');
  
      expect(emailInput).toBeTruthy();
      expect(emailInput.type).toBe('email');
      expect(emailLabel).toBeTruthy();
    });
  
    it('updates email value when input changes', () => {
      const { getByLabelText } = render(<RegisterEmail setUserEmail={() => {}} />);
      const emailInput = getByLabelText('Email Address') as HTMLInputElement;
  
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  
      expect(emailInput.value).toBe('test@example.com');
    });
  
    it('displays error message for invalid email', () => {
      const { getByLabelText, getByText } = render(<RegisterEmail setUserEmail={() => {}} />);
      const emailInput = getByLabelText('Email Address') as HTMLInputElement;
  
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
  
      const errorMessage = getByText('Invalid email address');
      expect(errorMessage).toBeTruthy();
    });
  
    it('does not display error message for valid email', () => {
      const { getByLabelText, queryByText } = render(<RegisterEmail setUserEmail={() => {}} />);
      const emailInput = getByLabelText('Email Address') as HTMLInputElement;
  
      fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });
  
      const errorMessage = queryByText('Invalid email address');
      expect(errorMessage).toBeNull();
    });
  });

  // Mock Firebase authentication and Firestore
vi.mock('firebase/auth', async (importOriginal) => {
    const actual = await importOriginal()
    return {
      actual,
    mockCreateUserWithEmailAndPassword: vi.fn(),
    mockSendEmailVerification: vi.fn(),
    mockUpdateProfile: vi.fn(),
    getAuth: vi.fn()
  }});
  vi.mock('firebase/firestore', async (importOriginal) => {
    const actual = await importOriginal()
    return {
      actual,
    doc: vi.fn(),
    setDoc: vi.fn(),
    // getFirestore: vi.fn()
  }});
  

vi.mock('firebase/auth');
vi.mock('firebase/firestore');

  describe('RegisterForm', () => {
    beforeEach(() => {
        // Clear mocks before each test
        vi.clearAllMocks();
      });
    it('submits the form with user details', async () => {
      // Mock user data
      const userData = {
        firstName: 'John',
        lastName: 'Doe',
        userType: 'writer',
        email: 'john@example.com',
        password: 'password',
      };

        // // Mock user object
        // const mockUser: User = {
        //     uid: 'fakeUserId',
        //     displayName: 'John Doe',
        //     email: 'john@example.com',
        //     emailVerified: true,
        //     phoneNumber: '+1234567890',
        //     photoURL: 'https://example.com/photo.jpg',
        //     isAnonymous: false,
        //     metadata: {
        //       creationTime: '2022-03-30T12:00:00Z',
        //       lastSignInTime: '2022-03-31T12:00:00Z',
        //     },
        //     providerData: [
        //       {
        //         uid: 'providerUserId',
        //         displayName: 'Provider User',
        //         email: 'provider@example.com',
        //         phoneNumber: '+1234567890',
        //         photoURL: 'https://example.com/provider-photo.jpg',
        //         providerId: 'password',
        //       },
        //     ],
        //     providerId: 'firebase',
        //     tenantId: null,
        //     refreshToken: "", 
        //     delete: vi.fn(), 
        //     getIdToken: vi.fn(), 
        //     getIdTokenResult: vi.fn(),
        //     reload: vi.fn(),
        //     toJSON: vi.fn(() => ({
        //         uid: 'fakeUserId',
        //         displayName: 'John Doe',
        //         email: 'john@example.com',
        //         emailVerified: true,
        //         phoneNumber: '+1234567890',
        //         photoURL: 'https://example.com/photo.jpg',
        //         isAnonymous: false,
        //         metadata: {
        //           creationTime: '2022-03-30T12:00:00Z',
        //           lastSignInTime: '2022-03-31T12:00:00Z',
        //         },
        //   }))
        // };
            
    //   // Mock createUserWithEmailAndPassword to resolve with a user object
    //   createUserWithEmailAndPassword.call({
    //     user: { uid: 'fakeUserId' },
    //   });


       // Mock createUserWithEmailAndPassword to resolve with a user object
       mockCreateUserWithEmailAndPassword.call({ user: { uid: 'fakeUserId' } }, mockGetAuth(DB), userData.email, userData.password);
 
  
      // Render the component
      const {  getByTestId } = render(
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      );
  
      // Fill in the form fields
      fireEvent.change(getByTestId("first_name"), { target: { value: userData.firstName } });
      fireEvent.change(getByTestId("last_name"), { target: { value: userData.lastName } });
      fireEvent.change(getByTestId('user_type'), { target: { value: userData.userType } });
      fireEvent.change(getByTestId('email'), { target: { value: userData.email } });
      fireEvent.change(getByTestId('password'), { target: { value: userData.password } });
  
      // Submit the form
      fireEvent.click(getByTestId('create_account'));
  
      // Wait for asynchronous actions to complete
      await waitFor(() => {
        // Assert that createUserWithEmailAndPassword was called with correct email and password
        expect(mockCreateUserWithEmailAndPassword).toHaveBeenCalledWith(
            mockGetAuth(DB), // Firebase auth object
          userData.email,
          userData.password
        );
            
        // const user = mockGetAuth(DB).currentUser
        // Assert that updateProfile was called with correct display name
        // expect(mockUpdateProfile).toHaveBeenCalledWith(
        //     {user: mockUser}, // Mock user object
        //   { displayName: `${userData.firstName} ${userData.lastName}`, photoURL: 'https://example.com/updated.jpg', }
        // );
  
        // // Assert that setDoc was called with correct user type
        // const mockUserRef = mockDoc(mockGetFirestore(DB), "users", { uid: 'fakeUserId' });
        // expect(mockSetDoc).toHaveBeenCalledWith(
        // //   { uid: 'fakeUserId' }, // Mock user object
        // mockUserRef,
        //   { userType: userData.userType }
        // );
  
        // Assert that sendEmailVerification was called
        // expect(mockSendEmailVerification).toHaveBeenCalledWith(
        //   { uid: 'fakeUserId' }, // Mock user object
        //   expect.any(Object) // Action code settings
        // );
      });
    });
  });