import React, { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { nanoid } from 'nanoid';

import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { Box, TiTle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }
  componentDidUpdate(_, prevState) {
    // console.log(prevProps, prevState);
    // console.log(this.props, this.state);
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  filteredPhoneBook = () =>
    this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  formSubmitHandler = ({ name, number }) => {
    const notDuplicationName = this.state.contacts.find(
      contact => contact.name === name
    );
    notDuplicationName !== undefined
      ? alert(`${name} is already in contacts.`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, { id: nanoid(), name, number }],
          };
        });
  };
  deleteContakt = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    return (
      <Box>
        <GlobalStyle />
        <TiTle>Phonebook</TiTle>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <TiTle>Contacts</TiTle>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          items={this.filteredPhoneBook()}
          onDelete={this.deleteContakt}
        />
      </Box>
    );
  }
}
