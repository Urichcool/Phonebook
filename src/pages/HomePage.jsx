import { HomePageText } from './Pages.styled';
import { AppContainer } from 'components/App.styled';
import { useAuth } from 'hooks/useAuth';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <AppContainer>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      {isLoggedIn ? (
        <HomePageText>
          Welcome {user.name} 💁‍♀️ please click 'Contacts' to see your private
          phonebook
        </HomePageText>
      ) : (
        <HomePageText>
          Welcome 💁‍♀️ please register or login to use the Phonebook
        </HomePageText>
      )}
    </AppContainer>
  );
};

export default HomePage;
