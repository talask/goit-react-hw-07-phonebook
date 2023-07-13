import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64ac6cd59edb4181202f873a.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
     async(_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts"); 
            console.log(responce.data)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
      }
});

// async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/tasks");
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }