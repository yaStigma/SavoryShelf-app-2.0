import { Suspense } from "react";
import { Outlet } from "react-router";

import CSS from "./Layout.module.css";
import Logo from "../Logo/Logo";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
export default function Layout() {
  return (
    <div className={CSS.wrapper}>
      <header className={CSS.header}>
        <Logo />
        <Header />
      </header>

      <main className={CSS.mainWrapper}>
        <div className={CSS.dashboard}>
          <Dashboard />
        </div>
        <div className={CSS.content}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
