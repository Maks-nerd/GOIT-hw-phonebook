import React from 'react';

const Filter = ({ filter, contacts, onChangeFilter }) => {
  return (
    <>
      {contacts.length > 1 && (
        <>
          <div className="filterContacts">
            <h2>Find contacts by name</h2>
            <input
              type="text"
              value={filter}
              onChange={onChangeFilter}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Filter;
