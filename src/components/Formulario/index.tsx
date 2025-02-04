import React from 'react';
import styles from './Formulario.module.css';

type FormularioProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleDeleteAllPosts: () => void;
  handleToggleForm: () => void;
  showForm: boolean;
  contentRef: React.RefObject<HTMLInputElement>;
  posts: string[];
};

const Formulario = ({
  handleSubmit,
  handleDeleteAllPosts,
  handleToggleForm,
  showForm,
  contentRef,
  posts,
}: FormularioProps) => (
  <div>
    {showForm && (
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Conteúdo" ref={contentRef} className={styles.input} />
        <button className={styles.button} type="submit">Adicionar Post</button>
      </form>
    )}
    <div className={styles.buttonGroup}>
      <button className={styles.button} onClick={handleDeleteAllPosts}>Deletar Todos os Posts</button>
      <button className={styles.button} onClick={handleToggleForm}>
        {showForm ? 'Esconder Formulário' : 'Mostrar Formulário'}
      </button>
    </div>
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          <p>{post}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Formulario;