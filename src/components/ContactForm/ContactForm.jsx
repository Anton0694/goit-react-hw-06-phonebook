import { useState } from "react"

import {Form, Input, Label, Button } from "./ContactForm.styled"


export default function ContactForm ({onSubmit})  {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  
  
  const handleSubmit = event => {
       event.preventDefault();
       onSubmit({name, number})
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
             <Label /* htmlFor={nameInputId} */>Name
               <Input
                 onChange={handleInputChange}
                 type="text"
                 value={name}
                 name="name"
                 /* id={nameInputId} */
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
               />
             </Label>
             <Label /* htmlFor={telInputId} */>Phone number
               <Input
                 onChange={handleInputChange}
                 type="tel"
                 value={number}
                 name="number"
                 /* id={telInputId} */
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
               />
            
             </Label>
       
             <Button type="submit" >Add contact</Button>
           </Form>
           
         
         
       )
    }




