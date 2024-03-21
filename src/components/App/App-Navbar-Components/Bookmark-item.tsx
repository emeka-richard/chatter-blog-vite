import React from 'react';
import { NavLink } from 'react-router-dom';
// import DOMPurify from 'dompurify';

import BookmarkIcon from "../../../assets/svg/bookmarkIcon.svg?react";
import style from "./app-navbar-component.module.css";

const BookmarkItem: React.FC = function () {
    // const sanitizedBookmarkIconSVG = DOMPurify.sanitize(BookmarkIcon);


  return (
    <NavLink to={"/feeds"} className={style.bookmark_item_container} aria-label="Bookmarks">
      {/* Bookmark Icon */}
      <BookmarkIcon aria-hidden="true" />
      {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedBookmarkIconSVG }} aria-hidden="true"/> */}

      {/* Text for Bookmarks */}
      <p className={style.bookmark_item_p}>Bookmarks</p>
    </NavLink>
  );
}

export default BookmarkItem;
