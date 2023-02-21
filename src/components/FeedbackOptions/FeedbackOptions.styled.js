import styled from '@emotion/styled';

export const Options = styled.div`
  display: flex;
  gap: 24px;
`;

export const Button = styled.button`
  width: 60px;
  height: 20px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: brown;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
  :hover {
    background-color: grey;
    color: white;
  }
`;