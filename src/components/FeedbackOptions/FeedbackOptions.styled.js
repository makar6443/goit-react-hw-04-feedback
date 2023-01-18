import styled from 'styled-components';

export const Button = styled.button`
font-size: 14px;
font-weight: 600;
  display: block;
  margin: 0;
  padding: 0;
  margin-right: 10px;
  min-width: 75px;
  height: 30px;
  background-color: #ffffff;
  border: 1px solid #ececec;
  border-radius: 5px;
  outline: none;
  color: black;
  cursor: pointer;
  :active {
    background-color: #00BFFF;
  }
`;

export const ButtonSet = styled.div`
  display: inline-flex;
  align-items: center;
`;