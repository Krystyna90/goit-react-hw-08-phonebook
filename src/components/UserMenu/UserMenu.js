import { Button } from "@mui/material";
import { Navigate, Link } from "react-router-dom";
import { useLogoutMutation } from "redux/user/user-query";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const [logout, { isSuccess }] = useLogoutMutation();

  if (isSuccess) {
    return <Navigate to="/"></Navigate>;
  }

  const onClickBtn = (e) => {
    logout();
    window.localStorage.removeItem("data");
  };

  return (
    <div className={css.NavBar}>
      <Link to="/" className={css.Home}>
        Home
      </Link>
      <Link to="/contacts" className={css.Home}>
        Your phonebook
      </Link>
      <Button
        onClick={onClickBtn}
        color="inherit"
        type="submit"
        className={css.LogoutBtn}
      >
        Log out
      </Button>
    </div>
  );
}
