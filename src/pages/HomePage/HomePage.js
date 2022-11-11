import "@fontsource/kolker-brush";
import { useSelector } from "react-redux";
import { selectUser } from "redux/user/userSlice";
import NotLogged from "components/HomeViews/NotLogged";
import Logged from "components/HomeViews/Logged";

const HomePage = () => {
  const { user } = useSelector(selectUser);

  return (
    <>
      {!user && <NotLogged></NotLogged>}
      {user && <Logged></Logged>}
    </>
  );
};
export default HomePage;
