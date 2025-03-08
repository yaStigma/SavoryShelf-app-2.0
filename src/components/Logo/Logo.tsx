import { Link } from "react-router";
import CSS from "./Logo.module.css";
export default function Logo() {
  return (
    <div className={CSS.wrapper}>
      <Link to="/">
        <img src="/logo.webp" alt="logo image" className={CSS.logo} />
      </Link>
    </div>
  );
}
