import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./app-navbar-component.module.css";

const TrendingTagItem: React.FC = function () {
  const trendingTags: string[] = ["Programming", "Data science", "Technology", "Machine Learning", "Politics"];

  return (
    <div className={style.trend_tag_item_container} >
      {/* Render each trending tag as NavLink */}
      {trendingTags.map((tag, i) => (
        <NavLink to={"/feeds"} className={style.trend_tag_item_p} key={i}>
          {tag}
        </NavLink>
      ))}
      {/* Container for "See all" option */}
      <div className={style.trend_tag_item_see_all_container}>
        {/* "See all" option */}
        <p className={style.trend_tag_item_see_all_p}>See all</p>
      </div>
    </div>
  );
}

export default TrendingTagItem;
