import React from 'react'
import AppNavbarOverviewChamberSection from './appNavbarOverviewChamberSection'
import AppNavbarTrendTagChamberSection from './appNavbarTrendTagChamberSection'
import AppNavbarPersonalChamberSection from './appNavbarPersonalChamberSection'
import style from "./appNavbar-aside.module.css"

const AppNavBarLayout:React.FC = function() {
  const appNavbarTitle: string = "CHATTER"

  return (
    <aside className={style.appNav_aside_wrapper}>
      <h2 className={style.appNav_aside_h2}>{appNavbarTitle}</h2>
      <AppNavbarOverviewChamberSection />
      <AppNavbarTrendTagChamberSection />
      <AppNavbarPersonalChamberSection />
    </aside>
  )
}

export default AppNavBarLayout