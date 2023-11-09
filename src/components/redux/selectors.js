export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter.filter;

// export const getIsLoading = state => state.contacts.isLoading;
// export const getError = state => state.contacts.error;

export const selectVisibleContacts = state => {
  const contacts = state.contacts.items;

  const filterValue = state.filter.filter;

  const normalizedFilter = filterValue.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
