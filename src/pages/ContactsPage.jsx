import { AppAddContactsForm } from "../components/Contacts/AppAddContactsForm";
import { AppContactsFilterInput } from "components/Contacts/AppContactsFilterInput";
import { AppContactsList } from "components/Contacts/AppContactsList";
import { ContactsApp } from "components/Contacts/Contacts.styled";
import { AppLoader } from "components/App,styled";
import { ThreeDots } from "react-loader-spinner";


export const ContactsPage = () => {
    return (
       <ContactsApp>
        <AppAddContactsForm />
          <AppLoader>
            <ThreeDots color="orange" />
          </AppLoader>
          <>
            <AppContactsFilterInput />
            <AppContactsList />
          </>
       \
      </ContactsApp> 
    )
}