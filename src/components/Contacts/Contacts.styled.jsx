import styled from '@emotion/styled';

export const ContactsApp = styled.div`
 padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactsTitle = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  color: #8181ec;
`;



export const ContactsAddForm = styled.form`
  width: 400px;
  margin-bottom: 20px;
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
  }
`;

export const ContactsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-position: inside;
  width: 400px;
`;

export const ContactsListItem = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  display: flex;
  justify-content: space-between;
`;

export const ContactsListLabel = styled.label`
  display: flex;
  flex-direction: column;
  
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ContactsAddInput = styled.input`
  width: 400px;
  height: 25px;
  outline: none;
  border-radius: 2px;
  border: 1px solid gray;
  &:hover,
  &:focus,
  &:active {
    border-color: orange;
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
  }
`;

export const ContactsDeleteButton = styled.button`
  margin: 0;
  padding: 0;
  width: 50px;
  height: 20px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  &:hover,
  &:focus {
    background-color: #b3b3f1;
  }
`;
