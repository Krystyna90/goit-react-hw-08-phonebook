import React from "react";
import { useSelector } from "react-redux";
import {
  useFetchContactsQuery,
  useRemoveContactsMutation,
} from "../../redux/contacts/contacts-query";
import { getFilter } from "../../redux/selectors";
import css from "./ContactsList.module.css";

const ContactList = () => {
  const { data = [], isLoading, isSuccess } = useFetchContactsQuery();
  const [removeContact, removeContactInfo] = useRemoveContactsMutation();
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (contactID) => {
    removeContact(contactID);
  };
  return (
    <div>
      {data.length > 0 && isSuccess && (
        <ul className={css.Contact_list}>
          {getFilteredContacts().map((contact) => (
            <li key={contact.id} className={css.Contact_list__item}>
              {contact.name} : {contact.number}
              {
                <button
                  className={css.DeleteBtn}
                  type="button"
                  name="delete"
                  onClick={() => deleteContact(contact.id)}
                >
                  Delete contact
                </button>
              }
            </li>
          ))}
        </ul>
      )}
      {isLoading && <p>...LOADING</p>}
    </div>
  );
};

export default ContactList;
