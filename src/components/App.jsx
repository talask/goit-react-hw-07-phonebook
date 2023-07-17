import React, { useEffect } from "react";
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Div } from './Common/App.styled';
import { fetchContacts } from "redux/operation";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, getError } from "redux/selectors";
import { Loader } from "./Loader/Loader";




export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
    console.log("dispatch")
  }, [dispatch]);

  return (
    <Div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      {isLoading && !error && <Loader/>}
      <Contacts/>
    </Div>
      
    )
  
};


     