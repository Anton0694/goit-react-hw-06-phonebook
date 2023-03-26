import { ContactsList, ContactsListItem, ContactListText, Button } from './ContactList.styled'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';


    
export default function ContactList({ contacts }) {
  const dispatch = useDispatch();
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          <ContactListText>{`${name}: ${number}`}</ContactListText>
          <Button
        type="button"
        onClick={() => dispatch(deleteContact({ id: contacts.id }))}
      >
        Delete
      </Button>
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

    