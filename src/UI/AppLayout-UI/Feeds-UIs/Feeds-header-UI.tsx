import React from 'react';
import { NavLink } from 'react-router-dom';
// import DOMPurify from 'dompurify';

import PenIcon from "../../../assets/svg/penIcon.svg?react";
import style from "./feeds-UI.module.css";

const FeedHeaderUI: React.FC = function () {
    // const sanitizedPenIconSVG = DOMPurify.sanitize(PenIcon);



  return (
    <div className={style.feed_header_wrapper}>
      <div className={style.feed_header_texts_container}>
        {/* Header text */}
        <h3 className={style.feed_header_texts_h3}>FEED</h3>
        <p className={style.feed_header_texts_p}>Explore different content you’d love</p>
      </div>
      {/* Button to navigate to publish page */}
      <NavLink to={"/article/publish"} className={style.feed_header_btn} aria-label="Publish a new content">
        {/* <PenIcon /> */}
        <PenIcon aria-hidden="true" />
        {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedPenIconSVG }} aria-hidden="true"/> */}

        <p className={style.feed_header_btn_p}>Post a content</p>
      </NavLink>
    </div>
  );
};

export default FeedHeaderUI;
