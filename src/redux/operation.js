import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = "https://64ac6cd59edb4181202f873a.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
     async(_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts"); 
           
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
      }
});

export const addContact = createAsyncThunk(
    "contacts/addContacts",
    async (text, thunkAPI) => {
      
    const state = thunkAPI.getState(); 
    const existingContact = state.contacts.items.find((contact) => 
    contact.name === text.name && contact.phone === text.phone );

    if (existingContact) {
      Notify.warning("Contact with the same name and phone already exists");
      return thunkAPI.rejectWithValue("Contact with the same name and phone already exists");
    }
      try {
       
        const response = await axios.post("/contacts", { ...text });
        
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactsId, thunkAPI) => {
      
      const state = thunkAPI.getState(); 
      const existingContact = state.contacts.items.find((contact) => contact.id === contactsId);
  
      if (!existingContact) {
        Notify.warning("Contact with the specified id does not exist");
        return thunkAPI.rejectWithValue("Contact with the specified id does not exist");
      }
      try {
        const response = await axios.delete(`/contacts/${contactsId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

