
import React from "react";
import analyticsIcon from "../../../assets/images/analytics-1.png";
import style from "./about.module.css";

const AboutAnalytics: React.FC = function () {
  const title: string = "Analytics";
  const note1: string =
    "Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time";

  return (
    <section className={style.analytics_wrapper} aria-label="Analytics Section">
      {/* Added aria-label to describe the purpose of the section for screen readers */}
      <div className={style.analytics_icon_container}>
        <img
          src={analyticsIcon}
          alt="Analytics Icon"
          className={style.analytics_icon}
          aria-hidden="true"
        />
        {/* Set aria-hidden to true since the image doesn't convey additional information */}
      </div>
      <h3 className={style.analytics_h3}>{title}</h3>
      <p className={style.analytics_p}>{note1}</p>
    </section>
  );
};

export default AboutAnalytics;
