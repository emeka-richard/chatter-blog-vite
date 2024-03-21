import React, { useState, ChangeEvent } from "react";
import style from "./register-forms.module.css";
import isValidEmail from "../../../../middlewares/isEmailValid";

interface RegisterEmailProps {
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
}



const RegisterEmail: React.FC<RegisterEmailProps> = ({ setUserEmail }) => {
  // State to manage the email input value
  const [emailValue, setEmailValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Function to handle changes in the email input
  const handleEmailSetting = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmailValue(value);

    // Perform email validation here
    if (!isValidEmail(value)) {
      setErrorMessage("Invalid email address");
    } else {
      setErrorMessage("");
    }

    setUserEmail(value);
  };

  return (
    <div className={style.register_email_wrapper}>
      {/* Label for the email input */}
      <label className={style.register_email_label} htmlFor="email">
        Email address
      </label>
      {/* Email input field */}
      <input
        data-testid="email"
        id="email" // Adding id for accessibility
        name="email"
        type="email"
        placeholder="example@yahoo.com"
        className={style.register_email_input}
        value={emailValue}
        onChange={handleEmailSetting}
        // Adding ARIA attributes for accessibility
        aria-label="Email Address"
        aria-required="true"
        aria-describedby="email-error" // If you have error message, reference it here
      />
      {/* Error message element */}
      {errorMessage && (
        <div id="email-error" className={style.error_message}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default RegisterEmail;

