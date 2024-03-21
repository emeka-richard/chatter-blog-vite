import React from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import scrollToSection from '../../../middlewares/scrollControl';

const NavbarLinks: React.FC = () => {
  return (
    <div className={style.navbar_links_wrapper}>
      {/* Home link */}
      <Link to="/" data-testid="home-id" onClick={() => scrollToSection('home')} className={style.links_item} aria-label="Home">
        Home
      </Link>
      {/* About Us link */}
      <Link to="/" data-testid="about-id" onClick={() => scrollToSection('about')} className={style.links_item} aria-label="About Us">
        About Us
      </Link>
      {/* Contact link */}
      <Link to="/" data-testid="contact-id" onClick={() => scrollToSection('contact')} className={style.links_item} aria-label="Contact">
        Contact
      </Link>
      {/* Blogs link */}
      <Link to="/" data-testid="blog-id" onClick={() => scrollToSection('blogs')} className={style.links_item} aria-label="Blogs">
        Blogs
      </Link>
    </div>
  );
};

export default NavbarLinks;
