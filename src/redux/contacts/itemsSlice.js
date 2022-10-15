import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';

const actions = [addContact, fetchContacts, deleteContact];

const handleFetchContacts = (state, action) => {
  state.contacts = action.payload;
};

const handleAddContact = (state, action) => {
  state.contacts.push(action.payload);
};

const handleDeleteContact = (state, action) => {
  const idx = state.contacts.findIndex(item => item.id === action.meta.arg);
  state.contacts.splice(idx, 1);
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        handleRejected
      ),
});

export const itemsReducer = itemsSlice.reducer;
