import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import css from "./RegisterForm.module.css";

const RegisterForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        return setName(value);
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
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      return alert("💩 Please fill in all fields!");
    } else if (password.length < 7) {
      return alert("Passwords must be at least 7 characters long!");
    }
    onSubmit({ name, email, password });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={css.RegisterContainer}>
      <form onSubmit={handleSubmit} className={css.Form} autoComplete="off">
        <TextField
          label="Name"
          variant="outlined"
          color="secondary"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <TextField
          label="Email"
          variant="outlined"
          color="secondary"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          label="Password"
          variant="outlined"
          color="secondary"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
