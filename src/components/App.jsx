import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, getContacts } from 'redux/contactsSlice';
import { useState } from 'react';
import  ContactForm  from './ContactForm/ContactForm';
import  ContactList  from './ContactList/ContactList';
import  {Filter}  from './Filter/Filter';
import { ContainerApp } from './App.styled';
import { nanoid } from 'nanoid';
import React from 'react';


export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [filter, setFilter] = useState('')
  
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
   dispatch(addContact(contact));
    
  };

  const onFilterChange = (event) => setFilter(event.target.value);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContacts = (contactId) => {
    dispatch(deleteContact(contactId));
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
