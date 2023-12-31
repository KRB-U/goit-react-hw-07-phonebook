import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;
`;

const LabelInputName = styled.label`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const InputName = styled.input`
  margin-right: 25px;
`;

const LabelInputPhone = styled.label`
  font-size: 17px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
`;

const InputPhone = styled.input`
  margin-bottom: 10px;
  margin-right: 20px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;

  background-color: #1caf50;
  cursor: pointer;

  width: fit-content;
  height: 25px;

  color: black;

  &:hover {
    background-color: #113350;
    color: white;
  }
`;

export {
  FormContainer,
  LabelInputName,
  InputName,
  LabelInputPhone,
  InputPhone,
  Button,
};
