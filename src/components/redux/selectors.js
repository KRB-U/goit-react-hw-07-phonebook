export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter.filter;

// export const getIsLoading = state => state.contacts.isLoading;
// export const getError = state => state.contacts.error;

const selectVisibleContacts = state => {
  const contacts = state.contacts.items;
  const filterValue = state.filter;
};
