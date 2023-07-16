import PropTypes from 'prop-types';
import { ButtonDel, TdUserData } from './Contacts.styled';

export const ContactItem = ({ name, phone, id, fnDelete}) => {
    return (
        <tr>
            <TdUserData >{name}:</TdUserData > 
            <TdUserData >{phone}</TdUserData > 
            <TdUserData >
                <ButtonDel type='button' 
                onClick={() => {fnDelete(id)}}>
                    Delete
                </ButtonDel>
            </TdUserData >
        </tr>
    )
}

ContactItem.propTypes = {
   
    name: PropTypes.string, 
    number: PropTypes.string, 
    id: PropTypes.string,
    fnDelete: PropTypes.func,
}