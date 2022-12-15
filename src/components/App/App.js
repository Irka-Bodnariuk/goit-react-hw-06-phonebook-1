import { useState, useEffect } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import users from 'users.json';

import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { Box, TiTle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? users
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filteredPhoneBook = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  const formSubmitHandler = ({ name, number }) => {
    const notDuplicationName = contacts.find(contact => contact.name === name);
    notDuplicationName !== undefined
      ? alert(`${name} is already in contacts.`)
      : setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Box>
      <GlobalStyle />
      <TiTle>Phonebook</TiTle>
      <ContactForm onSubmit={formSubmitHandler} />
      <TiTle>Contacts</TiTle>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList items={filteredPhoneBook()} onDelete={deleteContact} />
    </Box>
  );
};

ContactForm.propType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  contactId: PropTypes.string.isRequired,
};
