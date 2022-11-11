import { useSelector } from "react-redux";
import { selectUser } from "redux/user/userSlice";
import NavAuth from "./NavAuth/NavAuth";
import UserMenu from "components/UserMenu/UserMenu";

const NavBar = () => {
  const { user } = useSelector(selectUser);

  return (
    <nav>
      {!user && <NavAuth></NavAuth>}
      {user && <UserMenu></UserMenu>}
    </nav>
  );
};

export default NavBar;
