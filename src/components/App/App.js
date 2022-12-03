import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

export class App extends Component {
  // loginInputId = nanoid();

  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { contacts, name } = this.state;
    // this.setState(prevState => {
    //   return { contacts: [...prevState.contacts, name] };
    // });
    this.setState({ contacts: [...contacts, name] });
    this.reset();
  };

  reset() {
    this.setState({ name: '' });
  }
  formSubmitHandler = data => {
    const a = data;
    console.log(a);
    return a;
  };
  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul onSubmit={this.formSubmitHandler}>
            {this.state.contacts.map(contact => {
              return <li key={nanoid()}>{contact}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
