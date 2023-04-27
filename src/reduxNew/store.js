import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/slice';
export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
