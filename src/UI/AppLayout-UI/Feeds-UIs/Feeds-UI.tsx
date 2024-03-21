import React from 'react';
import style from "./feeds-UI.module.css";
import FeedHeaderUI from './Feeds-header-UI';
import FeedsNavLinkUI from './Feeds-NavLink-UI';
import { Outlet } from 'react-router-dom';

const FeedsUI: React.FC = function () {
  return (
    <section className={style.feed_UI_wrapper}>
      {/* Feed Header */}
      <div className={style.feed_UI_container}>
        {/* Header Section */}
        <FeedHeaderUI />
        {/* Navigation Links */}
        <FeedsNavLinkUI />
        {/* Render the nested routes */}
        <Outlet />
      </div>
    </section>
  );
}

export default FeedsUI;
