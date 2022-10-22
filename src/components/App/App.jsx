import { Component } from 'react';
import { nanoid } from 'nanoid';
// import { render } from 'react-dom';

import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

import { Container, TitlePhonebook, TitleContacts } from './App.styled';

export class App extends Component {
  static propTypes = {
    //описуємо пропси
  };

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  handleContactFormSubmit = ({ name, number }) => {
    if (this.state.contacts.some((contact) => {
      return contact.name.toLowerCase() === name.toLowerCase();
    }))
    {
      //alert
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: nanoid(), name: name, number: number }],
    }));
  };

  handleFilterChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleContactDelete = event => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => {
        return contact.id !== event.target.id;
      }),
    }));
  };

  render() {
    return (
      <Container>
        <TitlePhonebook title="Phonebook">Phonebook</TitlePhonebook>
        <ContactForm handleSubmit={this.handleContactFormSubmit} />

        <TitleContacts title="Contacts">Contacts</TitleContacts>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList contacts={this.state.contacts} filter={this.state.filter} onDelete={this.handleContactDelete} />
      </Container>
    );
  }
}
