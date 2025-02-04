import React from 'react';
import styles from './Hero.module.css';
import appStyles from '../../App.module.css';

const Hero = () => {
  return (
    <div className={`${styles.hero} ${appStyles.heroContainer}`}>
      <h1 className={styles.heroTitle}>Bem-vindo ao Meu Site</h1>
      <p className={styles.heroSubtitle}>Este é um subtítulo chamativo</p>
      <button className={styles.heroButton}>Saiba Mais</button>
    </div>
  );
};

export default Hero;