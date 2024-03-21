import React from 'react';
// import DOMPurify from 'dompurify';

import TrendUpIcon from "../../../assets/svg/trendUp.svg?react";
import TrendingTagItem from '../../../components/App/App-Navbar-Components/TrendingTag-item';
import style from "./appNavbar-aside.module.css";

const AppNavbarTrendTagChamberSection: React.FC = function () {

    // const sanitizedTrendUpIconSVG = DOMPurify.sanitize(TrendUpIcon);

  return (
    <nav className={style.appNav_trendTag_wrapper}>
      {/* Trending Tags header */}
      <div className={style.appNav_trendTag_header}>
        <h3 className={style.appNav_trendTag_h3}>Trending Tags</h3>
        {/* Trending tags icon */}
        <TrendUpIcon aria-label="Trending" />
        {/* <svg dangerouslySetInnerHTML={{ __html: sanitizedTrendUpIconSVG }} aria-label="Trending Tags"/> */}

      </div>
      {/* Trending tags container */}
      <div className={style.appNav_trendTag_container}>
        <TrendingTagItem />
      </div>
    </nav>
  );
}

export default AppNavbarTrendTagChamberSection;
