import React from "react";
import { NavLink } from "react-router-dom";
import style from "./feeds-UI.module.css";

const FeedsNavLinkUI: React.FC = function () {
  return (
    <header className={style.feed_navlink_wrapper}>
      <NavLink
        to={"/feeds/all"}
        style={({ isActive }) => ({
          borderBottom: isActive ? `4px solid var(--purple-color)` : "none",
          transition: `all 200ms ease-in-out`,
        })}
        className={style.feed_navlink_item}
        aria-label="For you"
      >
        For you
      </NavLink>
      <NavLink
        to={"/feeds/featured"}
        style={({ isActive }) => ({
          borderBottom: isActive ? `4px solid var(--purple-color)` : "none",
          transition: `all 200ms ease-in-out`,
        })}
        className={style.feed_navlink_item}
        aria-label="Featured"
      >
        Featured
      </NavLink>
      <NavLink
        to={"/feeds/recent"}
        style={({ isActive }) => ({
          borderBottom: isActive ? `4px solid var(--purple-color)` : "none",
          transition: `all 200ms ease-in-out`,
        })}
        className={style.feed_navlink_item}
        aria-label="Recent"
      >
        Recent
      </NavLink>
    </header>
  );
};

export default FeedsNavLinkUI;
