import { connect } from 'react-redux';
import {contactActions, contactsSelectors} from '../../redux/contacts';
import Filter from './Filter';

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(contactActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);