import React from 'react';
import AccountItem from '../../../components/App/App-Navbar-Components/Account-item';
import NotificationItem from '../../../components/App/App-Navbar-Components/Notification-item';
import LogoutItem from '../../../components/App/App-Navbar-Components/Logout-item';


import style from "./appNavbar-aside.module.css";

const AppNavbarPersonalChamberSection: React.FC = function() {
  return (
    <nav className={style.appNav_personal_wrapper}>
      {/* Personal section header */}
      <h3 className={style.appNav_personal_h3}>Personal</h3>
      {/* Personal section container */}
      <div className={style.appNav_personal_container}>
        {/* Account item */}
        <AccountItem />
        {/* Notification item */}
        <NotificationItem />
        {/* Logout item */}
        <LogoutItem />
      </div>
    </nav>
  );
}

export default AppNavbarPersonalChamberSection;
