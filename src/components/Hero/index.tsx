import React from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle, HeroButton } from './styles';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>HERO do Site</HeroTitle>
      <HeroSubtitle>Este é um subtítulo</HeroSubtitle>
      <HeroButton>Saiba Mais</HeroButton>
    </HeroContainer>
  );
};

export default Hero;