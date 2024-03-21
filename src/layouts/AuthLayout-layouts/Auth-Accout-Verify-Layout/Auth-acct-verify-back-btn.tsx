import React from 'react';
// import DOMPurify from 'dompurify';

import BackButton from '../../../assets/svg/back-button.svg?react';
import style from './auth-account-verify.module.css';

const AuthAccountVerifyBackBtn: React.FC = function () {
    // const sanitizedBackButtonSVG = DOMPurify.sanitize(BackButton);


  return (
    <div
      className={style.auth_acct_btn_wrapper}
      onClick={() => window.history.back()} // Allow the back button to function as expected
      role="button" // Add role="button" to indicate that it is clickable
      tabIndex={0} // Add tabIndex={0} to make it focusable
    >
      <BackButton aria-hidden="true" /> 
      {/* Hide the SVG from screen readers */}
      {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedBackButtonSVG }} aria-hidden="true"/> */}

      <p className={style.auth_acct_btn_p}>Back</p>
    </div>
  );
};

export default AuthAccountVerifyBackBtn;
