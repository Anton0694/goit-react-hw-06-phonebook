import { useState } from "react"
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
/* import { getContacts } from 'redux/selectors'; */

import {Form, Input, Label, Button } from "./ContactForm.styled"


export default function ContactForm ({onSubmit})  {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

    const dispatch = useDispatch();
 
  
  
  const handleSubmit = event => {
       event.preventDefault();
        dispatch(addContact({ name, number }));
       reset();
  }  
  
  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value)
        break;
      
      case 'number':
        setNumber(value)
        break;
      default:
        return
    }
  };    
  

    
  const  reset = () => {
    setName('')
    setNumber('')
  }  
  
     
       return (
        
           <Form onSubmit={handleSubmit}>
             <Label >Name
               <Input
                 onChange={handleInputChange}
                 type="text"
                 value={name}
                 name="name"
               
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
               />
             </Label>
             <Label >Phone number
               <Input
                 onChange={handleInputChange}
                 type="tel"
                 value={number}
                 name="number"
                
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
               />
            
             </Label>
       
             <Button type="submit" >Add contact</Button>
           </Form>
           
         
         
       )
    }




