import { useState, useEffect  } from 'react';
import  ContactForm  from './ContactForm/ContactForm';
import  ContactList  from './ContactList/ContactList';
import  Filter  from './Filter/Filter';
import { ContainerApp } from './App.styled';
import { nanoid } from 'nanoid';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? []
  });
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const onSubmitHandler = (data) => {
    const isContactExists = contacts.some((contact) => contact.name === data.name);

    if (isContactExists) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }
    setContacts((prevContacts) => [...prevContacts, contact]);
    
  };

  const onFilterChange = event => (setFilter(event.target.value))

  
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  

    const deleteContacts = (contactId) => {
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      );
    };
   
    return (
      <ContainerApp>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onFilterChange={onFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={deleteContacts} />
      </ContainerApp>
    );
  }
