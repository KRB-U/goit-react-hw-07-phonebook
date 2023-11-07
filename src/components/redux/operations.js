import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './contactSlice';

axios.defaults.baseURL = 'https://6549f138e182221f8d523022.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// export const fetchContacts = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());

//     const response = await axios.get('/contacts');

//     dispatch(fetchingSuccess(response.data));
//   } catch (err) {
//     dispatch(fetchingError(err.message));
//   }
// };

const addContact = () => {};
const deleteContact = () => {};
