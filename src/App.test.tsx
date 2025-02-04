import React from 'react'; // eslint-disable-line no-unused-vars
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders post with image and text', () => {
  render(<App />);
  const imageElement = screen.getByAltText(/Post image/i);
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', 'https://www.minimundi.com.br/cdn/imagens/produtos/original/miniatura-carro-batmovel-batman0the0brave-and-bold-animated-series-1-43-ixo-eaglemoss_a.jpg');
  
  const textElement = screen.getByText(/Olha só que legal minha miniatura do Batmóvel./i);
  expect(textElement).toBeInTheDocument();
});

test('allows users to add comments', () => {
  render(<App />);
  
  const commentInput = screen.getByTestId('comment-input');
  const addCommentButton = screen.getByTestId('add-comment-button');

  fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
  fireEvent.click(addCommentButton);

  fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
  fireEvent.click(addCommentButton);

  const firstComment = screen.getByText('Primeiro comentário');
  const secondComment = screen.getByText('Segundo comentário');

  expect(firstComment).toBeInTheDocument();
  expect(secondComment).toBeInTheDocument();
});