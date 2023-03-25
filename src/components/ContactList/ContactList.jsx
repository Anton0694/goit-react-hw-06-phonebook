import { ContactsList, ContactsListItem, ContactListText, Button } from './ContactList.styled'
import PropTypes from 'prop-types';
    

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          <ContactListText>{`${name}: ${number}`}</ContactListText>
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </ContactsListItem>
      ))}
                
    </ContactsList>
        
  )
  
}
        
    


ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      
    })
  ),
};

    