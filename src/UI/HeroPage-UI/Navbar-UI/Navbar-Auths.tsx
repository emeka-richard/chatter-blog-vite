import React from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

const NavbarAuths: React.FC = () => {
  return (
    <div className={style.navbar_auths_wrapper}>
      {/* Log In link */}
      <Link to={'/auth/sign/login'} className={style.auth_login} aria-label="Log In">
        Log In
      </Link>
      {/* Sign Up link */}
      <Link to={'/auth/sign/register'} className={style.auth_signup} aria-label="Sign Up">
        Sign Up
      </Link>
    </div>
  );
};

export default NavbarAuths;
