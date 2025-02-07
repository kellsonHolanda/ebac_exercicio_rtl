import styled from 'styled-components';

export const VagaContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const VagaTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const VagaDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const VagaLocation = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

export const VagaSalary = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const VagaButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004494;
  }
`;