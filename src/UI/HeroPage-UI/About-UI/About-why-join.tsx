// import React from 'react'
// import style from "./about.module.css"
// import AboutAnalytics from './About-analytics';
// import AboutSocialInteraction from './About-social-interaction';
// import AboutContentCreation from './About-content-creation';


// const AboutWhyJoin: React.FC = function () {
//   const title: string = "Why you should join chatter";
//   const note1: string = "Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people."

//   return (
//     <section className={style.about_why_wrapper}>
//         <header className={style.about_why_header}>
//           <h2 className={style.about_why_h2}>{title}</h2>
//           <p className={style.about_why_p}>{note1}</p>
//         </header>
//         <div className={style.about_why_options}>
//           <AboutAnalytics />
//           <AboutSocialInteraction />
//           <AboutContentCreation />
//         </div>
//     </section>
//   )
// }

// export default AboutWhyJoin

import React from 'react';
import style from "./about.module.css";
import AboutAnalytics from './About-analytics';
import AboutSocialInteraction from './About-social-interaction';
import AboutContentCreation from './About-content-creation';

const AboutWhyJoin: React.FC = function () {
  const title: string = "Why you should join chatter";
  const note1: string = "Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people.";

  return (
    <section className={style.about_why_wrapper}>
      <header className={style.about_why_header}>
        <h2 className={style.about_why_h2}>{title}</h2>
        <p className={style.about_why_p}>{note1}</p>
      </header>
      <div className={style.about_why_options}>
        {/* Each feature component is included */}
        <AboutAnalytics />
        <AboutSocialInteraction />
        <AboutContentCreation />
      </div>
    </section>
  );
}

export default AboutWhyJoin;
