import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;

const getContacts = state => state.contacts.items;

const getLoadingContacts = state => state.contacts.loading;

const getNotificationContacts = state => state.contacts.notification;

const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  const normilizeFilter = filter.toLocaleLowerCase();

  const findContacts = contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normilizeFilter),
  );

  return findContacts;
})

const contactsSelectors = {
  getFilter,
  getContacts,
  getLoadingContacts,
  getFilteredContacts,
  getNotificationContacts
}

export default contactsSelectors;