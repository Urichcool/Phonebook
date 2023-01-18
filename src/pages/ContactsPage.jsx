import { AppAddContactsForm } from '../components/Contacts/AppAddContactsForm';
import { AppContactsFilterInput } from 'components/Contacts/AppContactsFilterInput';
import { AppContactsList } from 'components/Contacts/AppContactsList';
import { ContactsApp } from 'components/Contacts/Contacts.styled';
import { AppLoader } from 'components/App.styled';
import { ThreeDots } from 'react-loader-spinner';
import { AppContainer } from 'components/App.styled';
import { getIsLoading, getContacts } from 'redux/contacts/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsText } from 'components/Contacts/Contacts.styled';
import { Helmet } from 'react-helmet';

const ContactsPage = () => {
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactsApp>
        <ContactsText>Add new contact</ContactsText>
        <AppAddContactsForm />
        {isLoading && (
          <AppLoader>
            <ThreeDots color="orange" />
          </AppLoader>
        )}
        {contacts.length !== 0 && (
          <>
            <AppContactsFilterInput />
            <AppContactsList />
          </>
        )}
      </ContactsApp>
    </AppContainer>
  );
};

export default ContactsPage;
