// Модули
import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hadleChange = e => {
    const { name } = e.target;

    this.setState({ [name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts } = this.props;

    const newContact = {
      // id: uuidv4(),
      name: name,
      number: number,
    };
    const dublicateContact = contacts.some(
      contact => newContact.name === contact.name,
    );

    if (!dublicateContact) {
      this.props.onSubmit(newContact);
      this.reset();
    } else {
      alert('Контакт с таким именем уже существует!');
      this.reset();
    }
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.hadleChange}
          />
        </label>
        <label>
          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.hadleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
