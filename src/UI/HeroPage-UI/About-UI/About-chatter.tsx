
import React from "react";
import style from "./about.module.css";
import img1 from "../../../assets/images/hero-2.png";

const AboutChatter: React.FC = function () {
  const title: string = "About Chatter";
  const note1: string =
    "Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm's heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive.";

  return (
    <div className={style.about_chatter_wrapper}>
      <div className={style.about_chatter_container}>
        <h2 className={style.about_chatter_h2}>{title}</h2>
        <p className={style.about_chatter_p}>{note1}</p>
      </div>
      {/* Background image container with appropriate ARIA role and label */}
      <div
        className={style.about_chatter_img}
        style={{ backgroundImage: `url(${img1})` }}
        role="img"
        aria-label="Image description"
      ></div>
    </div>
  );
};

export default AboutChatter;
