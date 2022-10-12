import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectisLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectUser = state => state.user.user;

export const selectIsLoggedIn = state => state.user.isLoggedIn;

export const selectIsRefreshing = state => state.user.isRefreshing;

export const selectAuth = createSelector(
  [selectUser, selectIsLoggedIn, selectIsRefreshing],
  (user, isLoggedIn, isRefreshing) => ({
    user,
    isLoggedIn,
    isRefreshing,
  })
);
