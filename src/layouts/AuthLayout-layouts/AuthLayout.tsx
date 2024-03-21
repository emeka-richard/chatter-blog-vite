import React from 'react'
import { Outlet } from 'react-router-dom'
import style from "./authLayout.module.css"
import AuthLayoutTexts from './Auth-texts'


const AuthLayout: React.FC = function () {

  return (
    <main className={style.auth_layout_wrapper}>
      <AuthLayoutTexts />
      <Outlet />
    </main>
  )
}

export default AuthLayout