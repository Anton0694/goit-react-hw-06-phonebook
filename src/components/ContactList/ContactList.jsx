import { ContactsList, ContactsListItem, ContactListText, Button } from './ContactList.styled'
import { useDispatch,useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';
import {  getContacts, getFilter } from '../redux/selectors';
    
export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);


const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  
  return (
    <ContactsList  contacts={filteredContacts} >
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          <ContactListText>{`${name}: ${number}`}</ContactListText>
          <Button
        type="button"
            onClick={() =>
              dispatch(deleteContact({ id }))
            }>
        Delete
          </Button>
          
        </ContactsListItem>
      ))}         
    </ContactsList>
  )
}


    