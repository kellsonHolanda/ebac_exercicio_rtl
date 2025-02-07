import React from 'react';
import { VagaContainer, VagaTitle, VagaDescription, VagaLocation, VagaSalary, VagaButton } from './styles';

type VagaProps = {
  title: string;
  description: string;
  location: string;
  salary: string;
};

const Vaga = ({ title, description, location, salary }: VagaProps) => {
  return (
    <VagaContainer>
      <VagaTitle>{title}</VagaTitle>
      <VagaDescription>{description}</VagaDescription>
      <VagaLocation>Localização: {location}</VagaLocation>
      <VagaSalary>Salário: {salary}</VagaSalary>
      <VagaButton>Candidatar-se</VagaButton>
    </VagaContainer>
  );
};

export default Vaga;