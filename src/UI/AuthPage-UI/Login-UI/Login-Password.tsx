import React, { useState, ChangeEvent } from "react";
import style from "./login.module.css";
// import DOMPurify from "dompurify";

import OpenEyeIcon from "../../../assets/svg/openEyeIcon.svg?react";
import CloseEyeIcon from "../../../assets/svg/closeEyeIcon.svg?react";

interface LoginPasswordProps {
  setUserPassword: React.Dispatch<React.SetStateAction<string>>;
}


const LoginPassword: React.FC<LoginPasswordProps> = ({setUserPassword}) => {
  // const sanitizedOpenEyeIconSVG = DOMPurify.sanitize(OpenEyeIcon);
  // const sanitizedCloseEyeIconSVG = DOMPurify.sanitize(CloseEyeIcon);

  const [pwdValue1, setPwdValue1] = useState<string>("");
  const [showPassword1, setShowPassword1] = useState<boolean>(false);

  const handlePwdSetting1 = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setPwdValue1(value);
    // if (!isValidEmail(value)) {
    //   setErrorMessage("Invalid email address");
    // } else {
    //   setErrorMessage("");
    // }

    setUserPassword(value);

    // setPwdValue1(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword1(!showPassword1);
  };

  return (
    <>
      <div className={style.login_pwd1_wrapper}>
        <label className={style.login_pwd1_label} htmlFor="password">
          Password
        </label>
        <div className={style.login_pwd1_input_container}>
          <input
           data-testid="password"
            id="password"
            name="password"
            type={showPassword1 ? "text" : "password"}
            placeholder="Password"
            className={style.login_pwd1_input}
            value={pwdValue1}
            minLength={8}
            required
            onChange={handlePwdSetting1}
            aria-label="Password"
            aria-required="true"
          />
          <div
            className={style.password_toggle_icon}
            onClick={togglePasswordVisibility}
            tabIndex={0}
            role="button"
            aria-label={showPassword1 ? "Hide password" : "Show password"}
          >
            {showPassword1 ? (
              <OpenEyeIcon />
              // <svg
              //   dangerouslySetInnerHTML={{ __html: sanitizedOpenEyeIconSVG }}
              //   aria-hidden="true"
              // />
            ) : (
              <CloseEyeIcon />
              // <svg
              //   dangerouslySetInnerHTML={{ __html: sanitizedCloseEyeIconSVG }}
              //   aria-hidden="true"
              // />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPassword;
