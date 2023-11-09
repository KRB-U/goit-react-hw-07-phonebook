import { createSelector } from '@reduxjs/toolkit';

export const selectContactsState = state => state.contacts;

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);

  const filterValue = selectFilter(state);

  const normalizedFilter = filterValue.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
