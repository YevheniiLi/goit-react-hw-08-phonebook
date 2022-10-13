export const contactsState = state => state.contacts.contacts.items;

export const filterState = state => state.contacts.filter;

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectLogedIn = state => state.contacts.logedIn;

export const selectUserName = state => state.contacts.user.name;

export const selectIsRefreshing = state => state.contacts.isRefreshing;