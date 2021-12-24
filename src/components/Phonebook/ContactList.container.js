import { connect } from 'react-redux';
import {contactOperations, contactsSelectors} from '../../redux/contacts';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
  loading: contactsSelectors.getLoadingContacts(state),
  notification: contactsSelectors.getNotificationContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactOperations.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);