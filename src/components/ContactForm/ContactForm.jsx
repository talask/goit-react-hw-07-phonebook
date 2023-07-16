import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, DivMyForm, Label } from './ContactForm.styled';
import * as yup from 'yup';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
// import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';

import { addContact } from 'redux/operation';

const InputField = styled(Field)`
    outline: none;
    padding: 5px 8px;
    margin-bottom: 10px;
    width: 250px;
    font-size: 18px;
`;

const ErrorField = styled(ErrorMessage)`
  color: red;
  font-size: 10px;
`

const initialValues = {
  name: '',
  phone: '',
};

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const schema = yup.object().shape({
  name: yup.string().matches(nameRegExp, 'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan').required(),
  phone: yup.string().matches(phoneRegExp, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleContactsChange = (obj) => {
    
    dispatch(addContact(obj));
    dispatch(fetchContacts());   
  };

    return ( 
      <DivMyForm>
        <Formik
            initialValues = {initialValues}
            validationSchema = {schema}
            onSubmit = {(values, {resetForm}) => {
              
              handleContactsChange(values);
              resetForm();
            }}
        >
            <Form>
                <Label>
                 Name
                </Label>
                <InputField 
                    type="text"
                    name="name"
                />
                <ErrorField name="name" component="div" />
                <Label>
                    Phone
                </Label>
                <InputField 
                    type="tel"
                    name="phone"
                />
                <ErrorField name="phone" component="div" />
                <Button type="submit">Add contact</Button>
            </Form>
          </Formik>
        </DivMyForm>
        )
    }

  