import { Helmet } from 'react-helmet';
import { AppContainer } from 'components/App.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <AppContainer>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </AppContainer>
  );
};

export default Register;
