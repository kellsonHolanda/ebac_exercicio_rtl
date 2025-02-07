import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #4CAF50;
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }
`;
