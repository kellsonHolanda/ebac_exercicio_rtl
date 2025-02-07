import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px 0;
  padding: 60px 20px;
  box-sizing: border-box;
  background: linear-gradient(135deg, #4a90e2, #7b92a3);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: white;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const HeroSubtitle = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  color: #d0d0d0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const HeroButton = styled.button`
  padding: 12px 24px;
  background-color: #5a6f8f;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #4a5f7f;
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: #3a4f6f;
    transform: translateY(0);
  }
`;