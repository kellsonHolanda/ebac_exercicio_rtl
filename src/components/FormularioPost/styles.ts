import styled from 'styled-components';

export const Container = styled.div`
  display: contents;
  padding: 60px 20px;
  background-color: #e0e0e0;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const Button = styled.button`
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004494;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  padding-top: 6px;
  gap: 20px; 
  justify-content: space-around; /* Distribui os botões com espaço ao redor */
`;

export const Header = styled.header`
  background-color: #f5f5f5;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 20px;
  border-radius: 8px 8px 0 0;
  width: 100%;
`;