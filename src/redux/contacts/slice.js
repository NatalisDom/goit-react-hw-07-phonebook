import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.contacts.isLoading = true;
      store.contacts.error = null;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.contacts.isLoading = false;
      store.contacts.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.contacts.isLoading = false;
      store.contacts.error = payload;
    },
    [addContact.pending]: store => {
      store.contacts.isLoading = true;
      store.contacts.error = null;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.contacts.isLoading = false;
      store.contacts.items.push(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.contacts.isLoading = false;
      store.contacts.error = payload;
    },
    [deleteContact.pending]: store => {
      store.contacts.isLoading = true;
      store.contacts.error = null;
    },
    [deleteContact.fulfilled]: (store, { payload }) => {
      store.contacts.isLoading = false;
      store.contacts.items = store.contacts.items.filter(
        item => item.id !== payload
      );
    },
    [deleteContact.rejected]: (store, { payload }) => {
      store.contacts.isLoading = false;
      store.contacts.error = payload;
    },
  },
});

export const contactReducer = contactsSlice.reducer;