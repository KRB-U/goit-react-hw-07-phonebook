import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};
//new
// export const setFilterValue = createAction(
//   'filter/setFilterValue',
//   filterValue => {
//     return {
//       payload: filterValue,
//     };
//   }
// );
//old
// export const setFilterValue = filterValue => {
//   return {
//     type: 'filter/setFilterValue',
//     payload: filterValue,
//   };
// };
//new
// export const filterReducer = createReducer(filterInitialState, {
//   [setFilterValue]: (state, action) => {
//     return {
//       filter: action.payload,
//     };
//   },
// });
//old
// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case setFilterValue.type:
//       return {
//         ...state,
//         filter: action.payload,
//       };

//     default:
//       return state;
//   }
// };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterValue(state, action) {
      // return {
      //   filter: action.payload,
      // };
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilterValue } = filterSlice.actions;
