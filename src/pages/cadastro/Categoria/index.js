import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form, Textarea } from '@rocketseat/unform';
import PageDefault from '../../../components/PageDefault';

import { Content } from './styles';

function CadastroVideo() {
  return (
    <PageDefault>
      <Content>
        <h1>Nova Categoria</h1>
        <Form>
          <Form name="nome" />
          <Input name="name" type="text" placeholder="Nome" />
          <Textarea
            name="description"
            type="text"
            placeholder="Todos os vídeos de exercícios estarão aqui"
          />
        </Form>
      </Content>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
