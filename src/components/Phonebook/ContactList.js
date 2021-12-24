// Модули
import React from 'react';

const ContactList = ({contacts, loading, onDeleteContact, notification}) => {
  return ( <>
  {notification && alert(notification)}
    {    
    !loading ? (
      <>
        { contacts.length > 0 ? (
          <>
        <h1>Contacts</h1>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <h3>
                {name}: <span>{number}</span>
              </h3>
              <button
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
        </>) : <h1>Список контактов пуст!</h1>}
      </>
    ) : (
      <h1>Загружаем...</h1>
    )}
  </> );
}
 
export default ContactList;
