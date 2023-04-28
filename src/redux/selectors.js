import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts.items;
export const getFilter = state => state.contacts.filter;

export const selectVisibleFilter = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const workingFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(workingFilter)
    );
  }
);
