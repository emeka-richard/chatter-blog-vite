import React from "react";
// import VerificationCodeInput from "./Auth-verify-input";
import style from "./auth-account-verify.module.css";

const AuthCodeBox: React.FC = () => {
//   const handleSubmit = (code: string) => {
//     // Handle submission of verification code
//     console.log("Verification code submitted:", code);
//   };

  return (
    <section className={style.auth_code_box_wrapper}>
      <div className={style.auth_code_box_texts_container}>
        <h2 className={style.auth_code_box_texts_h2}>
          Enter confirmation code
        </h2>
        <p className={style.auth_code_box_texts_p}>
          We emailed you a verification link. Please check mail and open on your browser for account
          verification
        </p>
      </div>
      {/* <VerificationCodeInput codeLength={4} onSubmit={handleSubmit} /> */}
    </section>
  );
};

export default AuthCodeBox;
