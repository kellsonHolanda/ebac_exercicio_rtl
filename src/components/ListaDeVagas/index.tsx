import React from 'react';
import Vaga from '../Vaga';
import styles from './ListaDeVagas.module.css';

type VagaType = {
  title: string;
  description: string;
  location: string;
  salary: string;
};

type ListaDeVagasProps = {
  vagas: VagaType[];
};

const ListaDeVagas = ({ vagas }: ListaDeVagasProps) => {
  return (
    <div className={styles.listaDeVagas}>
      {vagas.map((vaga, index) => (
        <Vaga
          key={index}
          title={vaga.title}
          description={vaga.description}
          location={vaga.location}
          salary={vaga.salary}
        />
      ))}
    </div>
  );
};

export default ListaDeVagas;