// import React from 'react';
// import style from "./blog-footer.module.css"
// import { Link } from 'react-router-dom';

// interface FooterItem {
//   item1: string;
//   item2: string;
//   item3: string;
//   item4: string;
//   item5: string;
//   item6: string;
//   item7: string;
//   item8: string;
// }

// const Footer: React.FC = () => {
//   const title: string = "CHATTER";

//   const footerItems: FooterItem = {
//     item1: "community",
//     item2: "Trending blogs",
//     item3: "Chatter for teams",
//     item4: "Support Docs",
//     item5: "Join slack",
//     item6: "Contact",
//     item7: "Official blog",
//     item8: "Engineering blog"
//   };

//   return (
//     <section className={style.footer_wrapper}>
//         <Link to={"/"} className={style.footer_title_h2}>{title}</Link>
//         <ul className={style.footer_explore_container}>
//           <h4 className={style.footer_h4}>Explore</h4>
//           <Link to="/" className={style.footer_item}>{footerItems.item1}</Link>
//           <Link to="/" className={style.footer_item}>{footerItems.item2}</Link>
//           <Link to="/" className={style.footer_item}>{footerItems.item3}</Link>
//         </ul>
//         <ul className={style.footer_support_container}>
//           <h4 className={style.footer_h4}>Support</h4>
//           <Link to="/" className={style.footer_item}>{footerItems.item4}</Link>
//           <Link to="/" className={style.footer_item}>{footerItems.item5}</Link>
//           <Link to="/" className={style.footer_item}>{footerItems.item6}</Link>
//         </ul>
//         <ul className={style.footer_blog_container}>
//           <h4 className={style.footer_h4}>Official blog</h4>
//           <Link to="/" className={style.footer_item}>{footerItems.item7}</Link>
//           <Link to="/" className={style.footer_item}>{footerItems.item8}</Link>
//         </ul>
//     </section>
//   );
// }

// export default Footer;


import React from 'react';
import style from './blog-footer.module.css';
import { Link } from 'react-router-dom';

interface FooterItem {
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
  item7: string;
  item8: string;
}

const Footer: React.FC = () => {
  const title: string = 'CHATTER';

  const footerItems: FooterItem = {
    item1: 'community',
    item2: 'Trending blogs',
    item3: 'Chatter for teams',
    item4: 'Support Docs',
    item5: 'Join slack',
    item6: 'Contact',
    item7: 'Official blog',
    item8: 'Engineering blog',
  };

  return (
    <section className={style.footer_wrapper} aria-label="Footer">
      {/* Added aria-label to describe the purpose of the footer for screen readers */}
      <Link to="/" className={style.footer_title_h2}>
        {title}
      </Link>
      <ul className={style.footer_explore_container}>
        <h4 className={style.footer_h4}>Explore</h4>
        <Link to="/" className={style.footer_item}>{footerItems.item1}</Link>
        <Link to="/" className={style.footer_item}>{footerItems.item2}</Link>
        <Link to="/" className={style.footer_item}>{footerItems.item3}</Link>
      </ul>
      <ul className={style.footer_support_container}>
        <h4 className={style.footer_h4}>Support</h4>
        <Link to="/" className={style.footer_item}>{footerItems.item4}</Link>
        <Link to="/" className={style.footer_item}>{footerItems.item5}</Link>
        <Link to="/" className={style.footer_item}>{footerItems.item6}</Link>
      </ul>
      <ul className={style.footer_blog_container}>
        <h4 className={style.footer_h4}>Official blog</h4>
        <Link to="/" className={style.footer_item}>{footerItems.item7}</Link>
        <Link to="/" className={style.footer_item}>{footerItems.item8}</Link>
      </ul>
    </section>
  );
};

export default Footer;
