// import React from 'react'
import style from ".//login.module.css"

function LoginTitle() {
    const title:string = "Welcome back"

  return (
    <header className={style.login_title}>{title}</header>
  )
}

export default LoginTitle