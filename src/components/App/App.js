import { useState, useEffect } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { nanoid } from 'nanoid';

import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { Box, TiTle } from './App.styled';

const users = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

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
