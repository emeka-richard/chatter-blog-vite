import React from 'react'
import style from "./about.module.css"
import AboutChatter from './About-chatter'
import AboutWhyJoin from './About-why-join'

const About: React.FC = function () {
  return (
    <section id='about' className={style.about_wrapper}>
        <AboutChatter />
        <AboutWhyJoin />
    </section>
  )
}

export default About