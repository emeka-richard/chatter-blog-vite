import React from 'react';
import { NavLink } from 'react-router-dom';
// import DOMPurify from 'dompurify';

import EnvelopIcon from "../../../assets/svg/envelopIcon.svg?react";
import style from "./app-navbar-component.module.css";

const DraftsItem: React.FC = function () {
    // const sanitizedEnvelopIconSVG = DOMPurify.sanitize(EnvelopIcon);


  return (
    <NavLink to={"/feeds"} className={style.draft_item_container} aria-label="Drafts">
      {/* Envelop Icon */}
      <EnvelopIcon aria-hidden="true" />
      {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedEnvelopIconSVG }} aria-hidden="true"/> */}

      {/* Text for Drafts */}
      <p className={style.draft_item_p}>Drafts</p>
    </NavLink>
  );
}

export default DraftsItem;
