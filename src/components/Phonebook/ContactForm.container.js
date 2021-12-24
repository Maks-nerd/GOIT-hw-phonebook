import { connect } from 'react-redux';
import {contactOperations, contactsSelectors} from '../../redux/contacts';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactOperations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);