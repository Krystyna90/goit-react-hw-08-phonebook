import "@fontsource/kolker-brush";
import { useSelector } from "react-redux";
import { selectUser } from "redux/user/userSlice";
import css from "./HomePage.module.css";
import book from "images/book.webp";

const HomePage = () => {
  let className = "HomeContainer";
  const { user } = useSelector(selectUser);
  if (user) {
    className = "HomeContainerLogged";
  }
  return (
    <div className={`${className}`}>
      <h1 className={css.Title}>Welcome to the phone book. </h1>
      <h2 className={css.Title}>Register or login to use our service </h2>
      <img className={css.Book} src={book} alt="Book"></img>
    </div>
  );
};
export default HomePage;
