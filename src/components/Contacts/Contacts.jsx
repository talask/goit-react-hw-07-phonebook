
import { ContactItem } from './ContactItem';
import { Table } from './Contacts.styled';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';


export const Contacts = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
   
    const dispatch = useDispatch();
    
    const fnDelete = (id) => {
        dispatch(deleteContact(id));
      }

    const visibleContacts = () => {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
      };

   
    return ( 
        contacts.length > 0 && <Table>
            <tbody>
                {visibleContacts().map(({name, number, id}, i) => {
                    return (
                        <ContactItem 
                            key={i}
                            name={name} 
                            number={number} 
                            id={id}
                            fnDelete={fnDelete}
                        ></ContactItem>
                    )
                }
                )}
            </tbody>
        </Table>
    )
}
