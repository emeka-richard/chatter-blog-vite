import React from 'react';
import { NavLink } from 'react-router-dom';
// import DOMPurify from 'dompurify';

import BlurChartIcon from "../../../assets/svg/blurChartIcon.svg?react";
import style from "./app-navbar-component.module.css";

const AnalyticsItem: React.FC = function () {
    // const sanitizedBlurChartIconSVG = DOMPurify.sanitize(BlurChartIcon);

    
  return (
    <NavLink to={"/analytics"} className={style.analytics_item_container} aria-label="Analytics">
      {/* Analytics Icon */}
      <BlurChartIcon aria-hidden="true" />
      {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedBlurChartIconSVG }} aria-hidden="true"/> */}

      {/* Text for Analytics */}
      <p className={style.analytics_item_p}>Analytics</p>
    </NavLink>
  );
}

export default AnalyticsItem;
