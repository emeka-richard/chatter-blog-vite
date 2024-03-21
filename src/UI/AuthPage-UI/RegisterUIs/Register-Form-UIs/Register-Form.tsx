import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import style from "./register-forms.module.css";
import RegisterInputs from "./Register-Inputs";
import RegisterSelect from "./Register-select";
import RegisterEmail from "./Register-Email";
import RegisterPassword from "./Register-Password";
import RegisterGoogleBtn from "./Register-Google-Btn";
import RegisterLinkedInBtn from "./Register-LinkedIn-Btn";

// firebase Imports
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestoreDB } from "../../../../Firebase-Tools/firebase";
import actionCodeSettings from "../../../../Firebase-Tools/firebase-ActionCode";
import capitalizeFirstLetter from "../../../../middlewares/CapitalizeTxt";

const RegisterForm: React.FC = function () {
  // const { currentUser } = useAuthVerifyUser();
  const navigate = useNavigate();

  // Define state variables
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userSelectOption, setUserSelectOption] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  // const [isEmailSent, setIsEmailSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // console.log(auth?.currentUser)

  // Form submission handler
  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      const user = userCredential.user;
      console.log(userCredential, user)
      if (user) {
        await updateProfile(user, {
          displayName: `${capitalizeFirstLetter(
            userFirstName
          )} ${capitalizeFirstLetter(userLastName)}`,
        });
        const userRef = doc(firestoreDB, "users", user.uid);
        await setDoc(userRef, {
          userType: userSelectOption,
        });
        await sendEmailVerification(user, actionCodeSettings);
        navigate("/auth/account-verification");
      }
      setIsSubmitting(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className={style.register_form}
      onSubmit={handleSubmitForm}
      aria-labelledby="register-heading"
    >
      {/* Register form inputs */}
      <h2 id="register-heading">Create Account</h2>
      <RegisterInputs
        setUserFirstName={setUserFirstName}
        setUserLastName={setUserLastName}
      />
      <RegisterSelect setUserSelectOption={setUserSelectOption} />
      <RegisterEmail setUserEmail={setUserEmail} />
      <RegisterPassword setUserPassword={setUserPassword} />

      {/* Submit button */}
      <button
        data-testid="create_account"
        className={style.register_form_btn}
        type="submit"
        aria-label="Create Account"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Creating..." : "Create Account"}
      </button>

      {/* Social media registration buttons */}
      <RegisterGoogleBtn />
      <RegisterLinkedInBtn />
    </form>
  );
};

export default RegisterForm;
