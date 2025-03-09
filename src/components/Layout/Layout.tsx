import { Suspense } from "react";
import { Outlet } from "react-router";

import CSS from "./Layout.module.css";
import Logo from "../Logo/Logo";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
export default function Layout() {
  return (
    <div className={CSS.wrapper}>
      <div className={CSS.mainWrapper}>
        <div className={CSS.dashboard}>
        <Logo />
          <Dashboard />
        </div>
        <div className={CSS.content}>
               <Header />
               <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
