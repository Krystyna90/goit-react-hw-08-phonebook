import { NavLink, Link } from "react-router-dom";
import css from "./NavAuth.module.css";

export default function NavAuth() {
  return (
    <div className={css.NavBar}>
      <Link to="/">Home</Link>
      <NavLink to="/register" className={css.NavLink}>
        {" "}
        Registration{" "}
      </NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}
