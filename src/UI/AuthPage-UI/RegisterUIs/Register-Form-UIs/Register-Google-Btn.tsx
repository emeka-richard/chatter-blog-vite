import React from 'react';
// import DOMPurify from 'dompurify';

import GoogleICon from '../../../../assets/svg/google1.svg?react';
// import  GoogleIcon from '../../../../assets/svg-components/googleIcon';
import style from './register-forms.module.css';

const RegisterGoogleBtn: React.FC = function () {
    // const sanitizedGoogleIcon = DOMPurify.sanitize(GoogleICon)

  return (
    <div className={style.register_google_container}>
      {/* Google logo */}
      <GoogleICon />
      {/* <GoogleIcon /> */}
      {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedGoogleIcon }} aria-hidden="true"/> */}

      {/* Text */}
      <p className={style.register_google_p}>Sign up with Google</p>
    </div>
  );
};

export default RegisterGoogleBtn;
