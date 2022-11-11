import React from "react";
import { Navigate } from "react-router-dom";
import { useLoginUserMutation } from "redux/user/user-query";
import LoginForm from "components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  const [loginUser, { data }] = useLoginUserMutation();

  const onHandleSubmit = async (data) => {
    await loginUser(data);
  };

  if (data) {
    return <Navigate to="/contacts"></Navigate>;
  }
  return (
    <div className={css.LoginContainer}>
      <LoginForm onSubmit={onHandleSubmit}></LoginForm>
    </div>
  );
}
