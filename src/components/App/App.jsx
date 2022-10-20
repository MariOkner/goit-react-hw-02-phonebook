import { Component } from 'react';
import { nanoid } from 'nanoid';
// import { render } from 'react-dom';

import { ContactForm } from '../ContactForm/ContactForm';
// import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

import { Container, TitlePhonebook, TitleContacts } from './App.styled';

export class App extends Component {
  static propTypes = {
    //описуємо пропси
  };

  state = {
    contacts: [],
    filter: '',
  };

  onAddContactFormSubmit = ({ name, number }) => {
    console.log(name);
    console.log(number);

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: nanoid(), name: name, number: number }],
    }));
  };

  handleFilter = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Container>
        <TitlePhonebook title="Phonebook">Phonebook</TitlePhonebook>
        <ContactForm onSubmit={this.onAddContactFormSubmit} />

        <TitleContacts title="Contacts">Contacts</TitleContacts>
        {/* <Filter value={this.state.filter} onChange={this.handleFilter} /> */}
        <ContactList contacts={this.state.contacts} />
      </Container>
    );
  }
}
