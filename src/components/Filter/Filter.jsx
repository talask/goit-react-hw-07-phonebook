import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from "react-redux";
import { InputField } from '../ContactForm/ContactForm.styled';
import { getFilter } from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';


export const Filter = () => {
    
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const { value } = evt.target;
        dispatch(updateFilter(value));
    };

    return (
        <>
            <p>
                Find contacts by name
            </p>
            <InputField 
                type="text"
                name="filter"
                value={filter}
                id={nanoid()}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={handleChange}
                required
            />
        </>
    )
}

