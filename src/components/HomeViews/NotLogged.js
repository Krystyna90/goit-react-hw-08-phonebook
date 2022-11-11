import book from "images/book.webp";

const NotLogged = () => {
  return (
    <div className={"HomeContainer "}>
      <h1 className={"Title"}>Welcome to the phone book. </h1>
      <h2 className={"Title"}>Register or login to use our service </h2>
      <img className={"Book"} src={book} alt="Book"></img>
    </div>
  );
};

export default NotLogged;
