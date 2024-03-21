import React from 'react';
// import DOMPurify from 'dompurify';

import FeedIcon from "../../../assets/svg/feedIcon.svg?react";
import { NavLink } from 'react-router-dom';
import style from "./app-navbar-component.module.css";

const FeedItem: React.FC = function () {
    // const sanitizedFeedIconSVG = DOMPurify.sanitize(FeedIcon);


  return (
    <NavLink to={"/feeds"} className={style.feed_item_container} aria-label="Feed">
      {/* Feed Icon */}
      <FeedIcon aria-hidden="true" />
      {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedFeedIconSVG }} aria-hidden="true"/> */}

      {/* Text for Feed */}
      <p className={style.feed_item_p}>Feed</p>
    </NavLink>
  );
}

export default FeedItem;
