import React from "react";
import style from "./welcome.module.css";
import { Link } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";

const Welcome: React.FC = function () {
  // const navigate = useNavigate()
  const firstNote: string =
    "Welcome to Chatter: A Haven for Text-Based Content";
  const secondNote: string =
    "Unleash the Power of Words, Connect with Like-minded Readers and Writers";

    // const handleGetStarted = (event: React.MouseEvent<HTMLButtonElement>) => {
    //   event.preventDefault()
    //   console.log(event);
    //   // Here you can navigate to another route if needed
    //   navigate("/auth/sign/register");
    // };
  return (
    <section id="home" className={style.welcome_wrapper}>
      <div className={style.welcome_container}>
        <div className={style.welcome_inner_container}>
          {/* Heading for the welcome note */}
          <h2 className={style.welcome_h2}>{firstNote}</h2>
          {/* Description of the welcome message */}
          <p className={style.welcome_p}>{secondNote}</p>
          {/* Button to navigate to the registration page */}
          <Link
          to={"/auth/sign/register"}
            // onClick={(event)=>handleGetStarted(event)}
            className={style.welcome_button}
            aria-label="Get started"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
