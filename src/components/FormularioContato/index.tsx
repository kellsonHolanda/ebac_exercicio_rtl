import React, { useRef } from 'react';
import { Section, Container, LeftColumn, RightColumn, Title, Text, SocialIcons, SocialIcon, Form, Input, Textarea, Button } from './styles';

const FormularioContato = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;
    if (name && email && message) {
      console.log('Nome:', name);
      console.log('Email:', email);
      console.log('Mensagem:', message);
      
      // Limpar os campos após o envio
      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (messageRef.current) messageRef.current.value = '';
    }
  };

  return (
    <Section>
      <Container>
        <LeftColumn>
          <Title>Localização</Title>
          <Text>28 Jackson Blvd Ste 1020 Chicago, IL 60604-2340</Text>
          <Title>Siga-nos</Title>
          <SocialIcons>
            <SocialIcon href="#" target="_blank">F</SocialIcon>
            <SocialIcon href="#" target="_blank">T</SocialIcon>
            <SocialIcon href="#" target="_blank">I</SocialIcon>
            <SocialIcon href="#" target="_blank">G</SocialIcon>
          </SocialIcons>
          <Text>© 2021 Política de privacidade</Text>
        </LeftColumn>
        <RightColumn>
          <Title>Formulário de Contato</Title>
          <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Nome" ref={nameRef} />
            <Input type="email" placeholder="Email" ref={emailRef} />
            <Textarea placeholder="Mensagem" rows={5} ref={messageRef} />
            <Button type="submit">Enviar</Button>
          </Form>
        </RightColumn>
      </Container>
    </Section>
  );
};

export default FormularioContato;