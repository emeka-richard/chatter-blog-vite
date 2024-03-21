import React from 'react';
import FeedItem from '../../../components/App/App-Navbar-Components/Feed-item';
import BookmarkItem from '../../../components/App/App-Navbar-Components/Bookmark-item';
import TeamBlogsItem from '../../../components/App/App-Navbar-Components/TeamBlogs-item';
import DraftsItem from '../../../components/App/App-Navbar-Components/Drafts-item';
import AnalyticsItem from '../../../components/App/App-Navbar-Components/Analytics-item';
import style from "./appNavbar-aside.module.css";

const AppNavbarOverviewChamberSection: React.FC = function () {
  return (
    <nav className={style.appNav_overview_wrapper}>
      {/* Overview section header */}
      <h3 className={style.appNav_overview_h3}>Overview</h3>
      {/* Overview section container */}
      <div className={style.appNav_overview_container}>
        {/* Feed item */}
        <FeedItem />
        {/* Bookmark item */}
        <BookmarkItem />
        {/* Team blogs item */}
        <TeamBlogsItem />
        {/* Drafts item */}
        <DraftsItem />
        {/* Analytics item */}
        <AnalyticsItem />
      </div>
    </nav>
  );
}

export default AppNavbarOverviewChamberSection;
