import { Navigate } from "react-router-dom";
import { useRegisterUserMutation } from "redux/user/user-query";
import RegisterForm from "components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  const [registerUser, { data, isSuccess, isError }] =
    useRegisterUserMutation();

  if (isSuccess) {
    window.localStorage.setItem("data", JSON.stringify(data));
    return <Navigate to="/contacts"></Navigate>;
  }
  if (isError) {
    alert("Something went wrong");
  }

  const onHandleSubmit = async (data) => {
    await registerUser(data);
  };

  return (
    <div className={css.RegisterContainer}>
      <RegisterForm onSubmit={onHandleSubmit}></RegisterForm>
    </div>
  );
}
