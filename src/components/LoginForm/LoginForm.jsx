import { useDispatch } from 'react-redux';
import {
  LoginFormStyled,
  LoginFormLabel,
  LoginFormInput,
  LoginFormButton,
  LoginFormStyledName,
} from './LoginForm.styled';
import { login } from 'redux/auth/operations';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <LoginFormStyled onSubmit={handleSubmit} autoComplete="on">
        <LoginFormStyledName>Sign up</LoginFormStyledName>
        <LoginFormLabel>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MdEmail />
            Email
          </div>
          <LoginFormInput type="email" name="email" autoComplete="on" />
        </LoginFormLabel>
        <LoginFormLabel>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <RiLockPasswordFill />
            Password
          </div>
          <LoginFormInput type="password" name="password" autoComplete="on" />
        </LoginFormLabel>
        <LoginFormButton type="submit">Login</LoginFormButton>
      </LoginFormStyled>
    </>
  );
};
