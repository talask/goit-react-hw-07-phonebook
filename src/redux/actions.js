import { nanoid } from 'nanoid';

export const filterChange = text => {
    return {
        type: "tasks/filterChange",
        payload: {
          text,
        },
      };
}

export const addContact = obj => {
    return {
        type: "tasks/addContact",
        payload: {
            id: nanoid(),
            newContact: obj,
        },
      };
}

export const deleteContact = (id) => {
    return {
        type: "tasks/deleteContacts",
        payload: {
            id
        },
      };
}



