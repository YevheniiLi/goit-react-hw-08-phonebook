// import { addContact, deleteContact, filterContacts } from "./actions";
import { createReducer, createAction } from "@reduxjs/toolkit";
import { addNewUser, logInUser, logOutUser, refreshUser } from "./operationsAuth";
import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
  user: {name: '', email: ''},
  token: '',
  logedIn: false,
  isRefreshing: false,
  errors: '',
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: ""
}

export const filterContacts = createAction("filter/filterContacts");

  

export const contactsReducer = createReducer(initialState, {
    [logOutUser.fulfilled]: (state) => {
      state.user = {name: '', email: ''};
      state.token = '';
      state.logedIn = false;
    },
    [logInUser.fulfilled]: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.logedIn = true;
    },
    [addNewUser.fulfilled]: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.logedIn = true;
    },
    [refreshUser.pending]: (state) => {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled]: (state, actions) => {
      state.user = actions.payload;
      state.isRefreshing = false;
      state.logedIn = true;
    },
    [refreshUser.rejected]: (state, actions) => {
      state.errors = actions.payload;
      state.isRefreshing = false;
    },
    [fetchContacts.pending]: (state) => {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addContact.pending]: (state) => {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [deleteContact.pending]: (state) => {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const idx = state.contacts.items.findIndex(cont => cont.id === action.payload);
      state.contacts.items.splice(idx, 1)
    },
    [deleteContact.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [filterContacts]: (state, action) => {
      state.filter = action.payload;
    }
})