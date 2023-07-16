import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
      try {
        const response = await axios.post("/contacts", { ...text });
        
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "tasks/deleteTask",
    async (contactsId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactsId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

