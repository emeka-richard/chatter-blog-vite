import React from 'react';
import style from './register-forms.module.css';
import { FaLinkedin } from 'react-icons/fa';

const RegisterLinkedInBtn: React.FC = function () {
  return (
    <div className={style.register_linkedIn_container}>
      {/* LinkedIn logo */}
      <FaLinkedin className={style.register_linkedIn_logo} aria-hidden="true" />

      {/* Sign up with LinkedIn */}
      <p className={style.register_linkedIn_p}>Sign up with LinkedIn</p>
    </div>
  );
};

export default RegisterLinkedInBtn;
