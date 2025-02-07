import React from 'react';
import { ListaDeVagasContainer } from './styles';
import Vaga from '../Vaga';

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
    <ListaDeVagasContainer>
      {vagas.map((vaga, index) => (
        <Vaga
          key={index}
          title={vaga.title}
          description={vaga.description}
          location={vaga.location}
          salary={vaga.salary}
        />
      ))}
    </ListaDeVagasContainer>
  );
};

export default ListaDeVagas;