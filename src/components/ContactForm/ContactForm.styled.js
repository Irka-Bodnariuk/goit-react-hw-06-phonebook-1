import styled from 'styled-components';

export const Form = styled.form`
  margin: 20px;
  padding: 20px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const Input = styled.input`
  width: 200px;
  padding: 5px;
`;

export const Button = styled.button`
  width: 100px;
  height: 20px;
  margin: 0 auto;
  background-color: #c5d3e0;
  border-radius: 4px;
  border: none;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
  &:hover,
  &:focus {
    background-color: #8892b0;
  }
`;
