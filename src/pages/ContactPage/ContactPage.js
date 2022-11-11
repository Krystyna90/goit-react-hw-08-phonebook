import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectUser } from "../../redux/user/userSlice";

import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

import css from "./ContactPage.module.css";

export default function ContactsPage() {
  const { user } = useSelector(selectUser);

  if (!user) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className={css.ContactsContainer}>
      <h1 className={css.Title}>{user.name}, welcome to your phone book !</h1>

      <ContactForm></ContactForm>
      <Filter></Filter>
      <ContactList></ContactList>
    </div>
  );
}
