import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  background-color: #f5f5f5;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const LeftColumn = styled.div`
  flex: 1;
  padding: 40px;
  background-color: #e0e0e0;
`;

export const RightColumn = styled.div`
  flex: 2;
  padding: 40px;
`;

export const Title = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
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

export const Textarea = styled.textarea`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;

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