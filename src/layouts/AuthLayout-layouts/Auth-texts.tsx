import React from 'react'
import style from "./authLayout.module.css"


const AuthLayoutTexts: React.FC = function () {
  const title: string = "CHATTER";
  const note1: string =
    "Unleash the Power of Words, Connect with Like-minded Readers and Writers";


  return (
    <section className={style.auth_texts_wrapper}>
      <div className={style.auth_texts_container}>
        <h1 className={style.auth_texts_h1}>{title}</h1>
        <p className={style.auth_texts_p}>{note1}</p>
      </div>
    </section>
  )
}

export default AuthLayoutTexts