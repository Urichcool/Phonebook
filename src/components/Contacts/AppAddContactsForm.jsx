import {
  ContactsAddForm,
  ContactsAddButton,
  ContactsListLabel,
  ContactsAddInput,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsSlice';
import { addContact } from 'redux/contacts/operations';
import { IoMdContact } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';

export const AppAddContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleFormSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements[0].value;
    const number = e.currentTarget.elements[1].value;

    if (contacts.some(contact => contact.name === name)) {
      window.alert(`${name} is already in contacts`);
      e.currentTarget.reset();
      return;
    }
    dispatch(
      addContact({
        name: name,
        number: number,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <ContactsAddForm autoComplete="off" onSubmit={handleFormSubmit}>
      <ContactsListLabel>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IoMdContact /> Name
        </div>

        <ContactsAddInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactsListLabel>
      <ContactsListLabel>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BsFillTelephoneFill /> Number
        </div>
        <ContactsAddInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactsListLabel>
      <ContactsAddButton type="submit">Add contact</ContactsAddButton>
    </ContactsAddForm>
  );
};
