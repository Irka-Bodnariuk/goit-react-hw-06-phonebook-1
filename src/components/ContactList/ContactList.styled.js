import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin-top: 0;
  display: flex;
  flex-direction: column;

  gap: 10px;
  padding: 20px;
  margin: 0;
`;

export const Item = styled.li`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Button = styled.button`
  width: 70px;
  height: 20px;
  margin-left: auto;
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
