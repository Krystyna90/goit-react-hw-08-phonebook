import { createSelector } from "@reduxjs/toolkit";

export const getContacts = ({ contacts }) => contacts;
export const getState = ({ contacts }) => ({
  loading: contacts.isLoading,
  error: contacts.error,
});

export const getNumberOfAllContacts = createSelector(
  [getContacts],
  (contacts) => {
    return contacts.length;
  }
);
export const getFilter = (store) => store.filter;
