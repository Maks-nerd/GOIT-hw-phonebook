import { connect } from 'react-redux';
import {contactOperations} from '../../redux/contacts';
import Phonebook from '../../views/PhonebookView';

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactOperations.fetchContacts()),
  // fetchContactsAsync: () => dispatch(contactOperations.fetchContactsAsync()),
});

export default connect(null, mapDispatchToProps)(Phonebook);