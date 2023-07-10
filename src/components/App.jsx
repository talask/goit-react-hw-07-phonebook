import React from "react";
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Div } from './Common/App.styled';


export const App = () => {
  
  return (
    <Div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      <Contacts/>
    </Div>
      
    )
  
};


     