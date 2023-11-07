import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
// import contactsData from 'jsonData/contactsData.json';

// const contactInitialState = {
//   contacts:
// };

// new
// export const addContact = createAction('contacts/addContact', obj => {
//   return {
//     payload: {
//       id: nanoid(),
//       ...obj,
//     },
//   };
// });

// old
// export const addContact = obj => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       ...obj,
//     },
//   };
// };
// new
// export const deleteContact = createAction(
//   'contacts/deleteContact',
//   contactId => {
//     return {
//       payload: contactId,
//     };
//   }
// );

// old
// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };
// new
// export const contactReducer = createReducer(contactInitialState, {
//   [addContact]: (state, action) => {
//     return [...state, action.payload];
//   },

//   [deleteContact]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// });

// old
// export const contactReducer = (state = contactInitialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return {
//         contacts: [...state.contacts, action.payload],
//       };

//     case deleteContact.type:
//       return {
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };

//     default:
//       return state;
//   }
// };

// .............................
// addContact: {
//   reducer(state, action) {
//     state.contacts.push(action.payload);
//   },
//   prepare(value) {
//     return {
//       payload: {
//         id: nanoid(),
//         ...value,
//       },
//     };
//   },
// },
// deleteContact(state, action) {
//   // return state.filter(contact => contact.id !== action.payload);
//   const idx = state.contacts.findIndex(
//     contact => contact.id === action.payload
//   );
//   state.contacts.splice(idx, 1);
// },

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },

  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },

  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },

    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
      // state.items.push(payload);
    },

    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const contactReducer = contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;
