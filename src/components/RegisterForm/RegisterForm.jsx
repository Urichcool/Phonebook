import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  RegisterFormStyled,
  RegisterFormLabel,
  RegisterFormInput,
  RegisterFormButton,
  RegisterFormStyledName,
} from './RegisterForm.styled';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterFormStyled onSubmit={handleSubmit} autoComplete="on">
      <RegisterFormStyledName>Register</RegisterFormStyledName>
      <RegisterFormLabel>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaUserAlt />
          Username
        </div>

        <RegisterFormInput type="text" name="name" autoComplete="on" />
      </RegisterFormLabel>
      <RegisterFormLabel>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <MdEmail /> Email
        </div>
        <RegisterFormInput type="email" name="email" autoComplete="on" />
      </RegisterFormLabel>
      <RegisterFormLabel>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RiLockPasswordFill /> Password
        </div>

        <RegisterFormInput type="password" name="password" autoComplete="on" />
      </RegisterFormLabel>
      <RegisterFormButton type="submit">Register</RegisterFormButton>
    </RegisterFormStyled>
  );
};
