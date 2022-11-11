import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import css from "./LoginForm.module.css";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      return alert("💩 Please fill in all fields!");
    } else if (password.length < 7) {
      return alert("Passwords must be at least 7 characters long!");
    }
    onSubmit({ email, password });
    setEmail("");
    setPassword("");
  };
  return (
    <div className={css.LoginContainer}>
      <form onSubmit={handleSubmit} className={css.Form} autoComplete="off">
        <TextField
          label="Email"
          variant="outlined"
          color="secondary"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={"textField"}
        />

        <TextField
          label="Password"
          variant="outlined"
          color="secondary"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className={"textField"}
        />

        <Button
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};
export default LoginForm;
