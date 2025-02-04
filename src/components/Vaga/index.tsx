import React from 'react';
import styles from './Vaga.module.css';

type VagaProps = {
  title: string;
  description: string;
  location: string;
  salary: string;
};

const Vaga = ({ title, description, location, salary }: VagaProps) => {
  return (
    <div className={styles.vaga}>
      <h2 className={styles.vagaTitle}>{title}</h2>
      <p className={styles.vagaDescription}>{description}</p>
      <p className={styles.vagaLocation}>Localização: {location}</p>
      <p className={styles.vagaSalary}>Salário: {salary}</p>
      <button className={styles.vagaButton}>Candidatar-se</button>
    </div>
  );
};

export default Vaga;