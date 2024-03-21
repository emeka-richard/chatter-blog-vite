import React from 'react'
import Navbar from '../UI/HeroPage-UI/Navbar-UI/Navbar'
import { Outlet } from 'react-router-dom'
import style from "./layouts.module.css"

const HeroPageLayout: React.FC = function () {
  return (
    <main className={style.hero_page_main}>
      <Navbar />
      <div className={style.hero_page_wrapper}>
        <Outlet />
      </div>
    </main>
  )
}


export default HeroPageLayout