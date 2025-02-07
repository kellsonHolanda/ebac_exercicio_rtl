import React, { useRef, useState } from 'react';
import EstiloGlobal from './styles';
import FormularioPost from './components/FormularioPost';
import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';
import ListaDeVagas from './components/ListaDeVagas';
import FormularioContato from './components/FormularioContato';


function App() {
  const [posts, setPosts] = useState<string[]>([]);
  const [showForm, setShowForm] = useState(true);
  const contentRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = contentRef.current?.value;
    if (content) {
      setPosts([...posts, content]);
      contentRef.current.value = '';
    }
  };

  const handleDeleteAllPosts = () => {
    setPosts([]);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const vagas = [
    {
      title: 'Desenvolvedor Front-end',
      description: 'Estamos procurando um desenvolvedor front-end talentoso para se juntar à nossa equipe.',
      location: 'São Paulo, SP',
      salary: 'R$ 5.000 - R$ 7.000',
    },
    {
      title: 'Desenvolvedor Back-end',
      description: 'Estamos procurando um desenvolvedor back-end experiente para se juntar à nossa equipe.',
      location: 'Rio de Janeiro, RJ',
      salary: 'R$ 6.000 - R$ 8.000',
    },
    {
      title: 'Designer UX/UI',
      description: 'Procuramos um designer UX/UI criativo para melhorar a experiência do usuário.',
      location: 'Curitiba, PR',
      salary: 'R$ 4.000 - R$ 6.000',
    },
    {
      title: 'Gerente de Projetos',
      description: 'Estamos em busca de um gerente de projetos experiente para liderar nossa equipe.',
      location: 'Belo Horizonte, MG',
      salary: 'R$ 8.000 - R$ 10.000',
    },
    {
      title: 'Analista de Dados',
      description: 'Procuramos um analista de dados para interpretar e analisar grandes volumes de dados.',
      location: 'Porto Alegre, RS',
      salary: 'R$ 5.500 - R$ 7.500',
    },
    {
      title: 'Engenheiro de Software',
      description: 'Estamos contratando um engenheiro de software para desenvolver soluções inovadoras.',
      location: 'Florianópolis, SC',
      salary: 'R$ 7.000 - R$ 9.000',
    },
    {
      title: 'Especialista em Marketing Digital',
      description: 'Procuramos um especialista em marketing digital para aumentar nossa presença online.',
      location: 'Recife, PE',
      salary: 'R$ 4.500 - R$ 6.500',
    },
    {
      title: 'Administrador de Redes',
      description: 'Estamos em busca de um administrador de redes para gerenciar nossa infraestrutura de TI.',
      location: 'Fortaleza, CE',
      salary: 'R$ 5.000 - R$ 7.000',
    },
    {
      title: 'Consultor de Vendas',
      description: 'Procuramos um consultor de vendas para expandir nossa base de clientes.',
      location: 'Salvador, BA',
      salary: 'R$ 3.500 - R$ 5.500',
    },
    {
      title: 'Suporte Técnico',
      description: 'Estamos contratando um profissional de suporte técnico para atender nossos clientes.',
      location: 'Manaus, AM',
      salary: 'R$ 3.000 - R$ 4.500',
    },
  ];

  return (
    <div className="app">
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <ListaDeVagas vagas={vagas} />
      <FormularioPost
        handleSubmit={handleSubmit}
        handleDeleteAllPosts={handleDeleteAllPosts}
        handleToggleForm={handleToggleForm}
        showForm={showForm}
        contentRef={contentRef}
        posts={posts}
      />
      <FormularioContato />
    </div>
  );
}

export default App;