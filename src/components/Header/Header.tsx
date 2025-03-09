import clsx from "clsx";
import { NavLink } from "react-router";
import CSS from "./Header.module.css";

const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
  return clsx(CSS.link, isActive && CSS.active);
};
export default function Header() {
  return (
    <header>
    <nav className={CSS.wrapper}>
      <NavLink to="/" className={getNavLinkClass}>
        All recipes
      </NavLink>
      <NavLink to="/recipesShelf" className={getNavLinkClass}>
        Your recipes Shelf
      </NavLink>
    </nav></header>
  );
}
