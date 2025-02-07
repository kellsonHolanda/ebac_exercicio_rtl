import React from 'react';
import { Container, FormWrapper, Form, Input, Button, ButtonGroup, Header } from './styles';

type FormularioPostProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleDeleteAllPosts: () => void;
  handleToggleForm: () => void;
  showForm: boolean;
  contentRef: React.RefObject<HTMLInputElement>;
  posts: string[];
};

const FormularioPost = ({
  handleSubmit,
  handleDeleteAllPosts,
  handleToggleForm,
  showForm,
  contentRef,
  posts,
}: FormularioPostProps) => {
  return (
    <Container>
      <FormWrapper>
        {showForm && (
          <Form onSubmit={handleSubmit}>
            <Header>Adicionar Novo Post</Header>
            <Input type="text" placeholder="Título" ref={contentRef} />
            <Input type="text" placeholder="Conteúdo" />
            <ButtonGroup>
              <Button type="submit">Adicionar</Button>
              <Button type="button" onClick={handleToggleForm}>Cancelar</Button>
            </ButtonGroup>
          </Form>
        )}
        <ButtonGroup>
          <Button onClick={handleDeleteAllPosts}>Deletar Todos os Posts</Button>
          <Button onClick={handleToggleForm}>
            {showForm ? 'Esconder Formulário' : 'Mostrar Formulário'}
          </Button>
        </ButtonGroup>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <p>{post}</p>
            </li>
          ))}
        </ul>
      </FormWrapper>
    </Container>
  );
};

export default FormularioPost;