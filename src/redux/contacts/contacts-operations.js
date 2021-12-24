import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import contactActions from './contacts-actions';

// axios.defaults.baseURL = 'http://localhost:4444';

const fetchContacts = () => async dispatch => {
  dispatch(contactActions.fetchContactsRequest());

  try {
    const response = await axios.get('/contacts');
    dispatch(contactActions.fetchContactsSuccess(response.data));
  } catch (error) {
    dispatch(contactActions.fetchContactsError(error.message));
  }
  // axios
  //   .get('/contacts')
  //   .then(({data}) => dispatch(fetchContactsSuccess(data)))
  //   .catch(error => dispatch(fetchContactsError(error)));
};

const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');

    return data;
  },
);

const addContact = contact => async dispatch => {
  dispatch(contactActions.addContactRequest());

  try {
    const response = await axios.post('/contacts', contact);
    dispatch(contactActions.addContactSuccess(response.data));
    // alert('Ваш контакт успешно добавлен!');
  } catch (error) {
    dispatch(contactActions.addContactError(error.message));
  }

  // axios
  //   .post('/contacts', contact)
  //   .then(({ data }) => dispatch(addContactSuccess(data)))
  //   .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => async dispatch => {
  dispatch(contactActions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(contactActions.deleteContactSuccess(contactId));
    // alert('Ваш контакт успешно удален!')
  } catch (error) {
    dispatch(contactActions.deleteContactError(error.message));
  }

  // axios
  //   .delete(`/contacts/${contactId}`)
  //   .then(({ data }) => dispatch(deleteContactSuccess(contactId)))
  //   .catch(error => dispatch(deleteContactError(error)));
};

const contactOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  fetchContactsAsync
};

export default contactOperations;
