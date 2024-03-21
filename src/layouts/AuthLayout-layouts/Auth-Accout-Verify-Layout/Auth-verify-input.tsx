import React, { useState } from "react";
import style from "./auth-account-verify.module.css";

interface Props {
  codeLength: number;
  onSubmit: (code: string) => void;
}

const VerificationCodeInput: React.FC<Props> = ({ codeLength, onSubmit }) => {
  const [code, setCode] = useState<string[]>(new Array(codeLength).fill(""));

  // Function to handle changes in input fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(code.join(""));
  };

  return (
    <form onSubmit={handleSubmit} className={style.auth_verify_input_form}>
      <div className={style.auth_verify_input_element_wrapper}>
        {/* Rendering input fields for each character of the verification code */}
        {code.map((input, index) => (
          <input
            key={index}
            type="text"
            value={input}
            onChange={(e) => handleChange(e, index)}
            className={style.auth_verify_input_box}
            maxLength={1}
            aria-label={`Verification code digit ${index + 1}`}
          />
        ))}
      </div>
      {/* Button to submit the verification code */}
      <button type="submit" className={style.auth_verify_input_btn}>
        Create account
      </button>
    </form>
  );
};

export default VerificationCodeInput;
