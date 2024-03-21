import React from 'react'
import LoginTitle from './Login-Title'
import LoginForm from './Login-Form'
import style from "./login.module.css"

const LoginUI:React.FC = function () {
  return (
    <section className={style.login_ui_wrapper}>
        <LoginTitle />
        <LoginForm />
    </section>
  )
}

export default LoginUI