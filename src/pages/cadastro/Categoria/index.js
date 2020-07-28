import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <Link to="/">Ir para a home</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
