import { Navigate } from "react-router-dom";
import { useRegisterUserMutation } from "redux/user/user-query";
import RegisterForm from "components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  const [registerUser, { isSuccess }] = useRegisterUserMutation();

  if (isSuccess) {
    return <Navigate to="/contacts"></Navigate>;
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
