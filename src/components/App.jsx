import { ContactsApp, ContactsTitle } from './App,styled';
import { AppAddContactsForm } from './AppAddContactsForm';
import AppContactsList from './AppContactsList';
import { ThreeDots } from 'react-loader-spinner';
import { AppContactsFilterInput } from './AppContactsFilterInput';
import { useSelector, useDispatch } from 'react-redux';
import { getError, getIsLoading, getContacts } from 'redux/contactsSlice';
import { useEffect, lazy } from 'react';
import { fetchContacts } from 'redux/auth/operations';
import { AppLoader } from './App,styled';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const routes = {
  HomePage: lazy(() => import('../pages/HomePage')),
  RegisterPage: lazy(() => import('../pages/RegisterPage')),
  LoginPage: lazy(() => import('../pages/LoginPage')),
};

export const App = () => {
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  // const contacts = useSelector(getContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { HomePage, RegisterPage, LoginPage } = routes;

  return isRefreshing
    ? (
    <AppLoader>
      <ThreeDots color="orange" />
    </AppLoader>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>

      {/* <ContactsApp>
        <AppAddContactsForm />
        {isLoading && !error && (
          <AppLoader>
            <ThreeDots color="orange" />
          </AppLoader>
        )}
        {contacts.length !== 0 && (
          <>
            <ContactsTitle>Contacts</ContactsTitle>
            <AppContactsFilterInput />
            <AppContactsList />
          </>
        )}
      </ContactsApp> */}
    </>
  );
};
