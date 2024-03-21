import React from "react";
import style from "./appLayout.module.css";
import AppNavBarAsideLayout from "./App-Navbar-Aside-Layouts/AppNavbar-Aside-Layout";
import AppNavbarTopLayout from "./AppNavbar-Top-Layout";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = function () {
  return (
    <main className={style.app_layout_main}>
      {/* Sidebar navigation layout */}
      <AppNavBarAsideLayout />

      {/* Top navigation layout */}
      <AppNavbarTopLayout />

      {/* Outlet for rendering child routes */}
      <section className={style.app_layout_outlet_wrapper}>
        <Outlet />
      </section>
    </main>
  );
};

export default AppLayout;
