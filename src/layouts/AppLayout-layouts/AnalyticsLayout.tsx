import React from "react";
import { Outlet } from "react-router-dom";
import style from "./appLayout.module.css"

const AnalyticsUI: React.FC = function () {
  return (
    <>
      <section className={style.analytics_wrapper}>
        <Outlet />
      </section>
    </>
  );
};

export default AnalyticsUI;
