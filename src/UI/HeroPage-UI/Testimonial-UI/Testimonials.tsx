import React from 'react';
import user1 from '../../../assets/images/user-1.png';
import style from "./testimonials.module.css"
import { NavLink } from 'react-router-dom';

interface TestimonialProps {
  name: string;
  workPlace: string;
  img: string;
  testimony: string;
}

const Testimonials: React.FC = () => {
  const userTestimonialProp: TestimonialProps = {
    name: 'Adebobola Muhydeen',
    workPlace: 'Software Developer at Apple',
    img: user1,
    testimony:
      'Chatter has become an integral part of my online experience. As a user of this incredible blogging platform, I have discovered a vibrant community of individuals who are passionate about sharing their ideas and engaging in thoughtful discussions.',
  };

  return (
    <section className={style.testimonial_wrapper}>
      {/* User image */}
      <img data-testid="testimonial-image-tag" src={userTestimonialProp.img} alt={`${userTestimonialProp.name}'s avatar`} className={style.testimonial_user_img} />
      <div className={style.testimonial_texts_section}>
        <div className={style.testimonial_texts}>
          {/* Testimonial text */}
          <p className={style.testimonial_texts_p1}>"{userTestimonialProp.testimony}"</p>
          {/* User information */}
          <p className={style.testimonial_texts_p2}>
            <span className={style.testimonial_texts_span}>{userTestimonialProp.name}, </span>
            {userTestimonialProp.workPlace}
          </p>
        </div>
        {/* Button to join chatter */}
        <NavLink to={"/auth/sign/register"} className={style.testimonial_btn} aria-label="Join chatter">
          Join chatter
        </NavLink>
      </div>
    </section>
  );
};

export default Testimonials;
