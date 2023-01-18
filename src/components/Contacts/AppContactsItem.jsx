import {
  ContactsListItem,
  ContactsDeleteButton,
  ContactsListText,
} from './Contacts.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/contactsSlice';
import { IoMdContact } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const AppContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  return (
    <ContactsListItem>
      <div>
        <ContactsListText>
          <IoMdContact />
          {name}
        </ContactsListText>
        <ContactsListText>
          <BsFillTelephoneFill />
          {number}
        </ContactsListText>
      </div>
      <ContactsDeleteButton
        onClick={() => dispatch(deleteContact(id))}
        disabled={isLoading}
      >
        <AiOutlineClose />
      </ContactsDeleteButton>
    </ContactsListItem>
  );
};

export default AppContactsItem;

AppContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
