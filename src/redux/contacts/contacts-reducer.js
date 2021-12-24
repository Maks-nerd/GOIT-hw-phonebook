import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactActions from './contacts-actions';

const items = createReducer([], {
  [contactActions.fetchContactsSuccess]: (_, { payload }) => payload,

  [contactActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],

  [contactActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [contactActions.fetchContactsRequest]: () => true,
  [contactActions.fetchContactsSuccess]: () => false,
  [contactActions.fetchContactsError]: () => false,
  [contactActions.addContactRequest]: () => true,
  [contactActions.addContactSuccess]: () => false,
  [contactActions.addContactError]: () => false,
  [contactActions.deleteContactRequest]: () => true,
  [contactActions.deleteContactSuccess]: () => false,
  [contactActions.deleteContactError]: () => false,
});

const getNotificationMessage = text => text;

const notification = createReducer('', {
  [contactActions.changeFilter]: () => getNotificationMessage(''),
  [contactActions.addContactRequest]: () => getNotificationMessage(''),
  [contactActions.addContactSuccess]: () =>
    getNotificationMessage('Контакт успешно добавлен!'),
  [contactActions.addContactError]: () =>
    getNotificationMessage('При добавлении контакта произошла ошибка'),
  [contactActions.deleteContactRequest]: () => getNotificationMessage(''),
  [contactActions.deleteContactSuccess]: () =>
    getNotificationMessage('Контакт успешно удален!'),
  [contactActions.deleteContactError]: () =>
    getNotificationMessage('При удалении контакта произошла ошибка'),
});

const filter = createReducer('', {
  [contactActions.changeFilter]: (state, { payload }) => payload,
  [contactActions.deleteContactSuccess]: () => '',
});

export default combineReducers({
  items,
  filter,
  loading,
  notification,
});
