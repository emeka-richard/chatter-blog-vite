import React from 'react';
// import DOMPurify from 'dompurify';

import SearchBar from '../../components/App/App-Top-Components/Search-bar';
import NotificationIcon from "../../assets/svg/notificationBell.svg?react";
import style from "./appLayout.module.css";

const AppNavbarTopLayout: React.FC = function () {
    // const sanitizedNotificationIconSVG = DOMPurify.sanitize(NotificationIcon);


  return (
    <section className={style.appNav_top_layout_wrapper}>
      {/* SearchBar component for searching */}
      <div className={style.appNav_top_layout_searchbar_container}>
        <SearchBar />
      </div>
      {/* Container for notification icon and user image */}
      <div className={style.appNav_top_layout_container}>
        {/* Notification icon */}
        <div className={style.appNav_top_layout_notificationIcon_container}>
          <NotificationIcon aria-label="Notifications" />
          {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedNotificationIconSVG }} aria-label="Notifications" /> */}

        </div>
        {/* Placeholder for user image */}
        <div className={style.appNav_top_layout_img} aria-label="User image"></div>
      </div>
    </section>
  );
}

export default AppNavbarTopLayout;
