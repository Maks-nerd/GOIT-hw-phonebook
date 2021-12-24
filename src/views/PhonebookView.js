// Модули
import React, { Component } from 'react';

// Компоненты
import ContactForm from '../components/Phonebook/ContactForm.container';
import Filter from '../components/Phonebook/Filter.container';
import ContactList from '../components/Phonebook/ContactList.container';

class PhonebookView extends Component {

  componentDidMount() {
    this.props.fetchContacts();
    // this.props.fetchContactsAsync();
  }

  render() {

    return (
      <>
        <h1 className="title">Phonebook</h1>

        <ContactForm />
        <Filter />
        <ContactList />
      </>
    );
  }
}

export default PhonebookView;
