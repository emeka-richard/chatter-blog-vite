import React from 'react';
import style from './Navbar.module.css';

const NavbarTitle: React.FC = () => {
  return (
    <>
      <h1 className={style.navbar_title} >
        CHATTER
      </h1>
    </>
  );
};

export default NavbarTitle;
