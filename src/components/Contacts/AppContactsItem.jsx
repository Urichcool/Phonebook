import { ContactsListItem, ContactsDeleteButton } from './Contacts.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/contactsSlice';

const AppContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  return (
    <ContactsListItem>
      {name}: {number}
      <ContactsDeleteButton
        onClick={() => dispatch(deleteContact(id))}
        disabled={isLoading}
      >
        Delete
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
