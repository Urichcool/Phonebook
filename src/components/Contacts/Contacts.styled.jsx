import styled from '@emotion/styled';


export const ContactsApp = styled.div`
 padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const ContactsText = styled.p`
  text-align: center;
  margin: 0;
  font-size: 25px;
  font-weight: 500;
`;



export const ContactsAddForm = styled.form`
  width: 400px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const ContactsAddButton = styled.button`
  font-size: 16px;
  background-color: #d601d6;
  color: white;
  padding: 5px;
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

export const ContactsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-position: inside;
  width: 400px;
`;

export const ContactsListItem = styled.li`
  padding: 10px;
  border-radius: 4px;
  background-color: #1dd2ff;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactsListText = styled.p`
  font-size: 20px;
  color:white;
  margin: 0;
  display: flex;
  align-items: center;
  svg{
    margin-right: 5px;
  }
`

export const ContactsListLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ContactsAddInput = styled.input`
  position: relative;
  width: 400px;
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

export const ContactsFilterInput = styled.input`
  width: 400px;
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

export const ContactsDeleteButton = styled.button`
background-color:white;
  margin: 0;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  &:hover,
  &:focus {
    color: red;
    transition: 500ms;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;
