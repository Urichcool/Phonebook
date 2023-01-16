import styled from "@emotion/styled";

export const RegisterFormStyledName = styled.p`
  text-align: center;
  margin: 0;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const RegisterFormStyled = styled.form`
padding:50px;
margin-left:auto;
margin-right:auto;
display:flex;
flex-direction:column;
align-items:center;
`
export const RegisterFormLabel = styled.label`
    font-size:20px;
    display:flex;
    flex-direction:column;
    margin-bottom:15px;
`
export const RegisterFormInput = styled.input`
  width: 500px;
  height: 25px;
  outline: none;
  border-radius: 2px;
  border: 1px solid gray;
  &:hover,
  &:focus,
  &:active {
    border-color: orange;
    transition: 500ms;
  }
`;

export const RegisterFormButton = styled.button`
  font-size: 20px;
  background-color: #d601d6;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: orange;
    transition: 500ms;
  }
`;

