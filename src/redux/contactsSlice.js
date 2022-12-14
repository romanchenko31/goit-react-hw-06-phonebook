import { createSlice } from '@reduxjs/toolkit';

const contactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Her Kne', number: '443-89-12' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsList,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
    },
    deleteContact: {
      reducer(state, action) {
        return state.filter(value => value.id !== action.payload);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
