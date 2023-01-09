import { useDispatch } from 'react-redux';
import {
  LoginFormStyled,
  LoginFormLabel,
  LoginFormInput,
  LoginFormButton,
} from './LoginForm.styled';
import { login } from 'redux/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value
      })
    );
    form.reset()
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
      <LoginFormLabel>
        Email
        <LoginFormInput type="email" name="email" />
      </LoginFormLabel>
      <LoginFormLabel>
        Password
        <LoginFormInput type="password" name="password" />
      </LoginFormLabel>
      <LoginFormButton type="submit">Login</LoginFormButton>
    </LoginFormStyled>
  );
};
