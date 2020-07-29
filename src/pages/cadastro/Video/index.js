import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

import { Content, ContentLink } from './styles';

function CadastroVideo() {
  return (
    <PageDefault>
      <Content>
        <h1>Novo Vídeo</h1>

        <form>
          <FormField
            label="Título"
            type="text"
            name="nome"
            placeholder="Nome"
          />
          <FormField
            label="Link do vídeo"
            type="text"
            name="nome"
            placeholder="Nome"
          />

          <FormField
            label="Link da imagem do vídeo"
            type="text"
            name="nome"
            placeholder="Nome"
          />
          <FormField
            label="Escolha uma categoria"
            type="text"
            name="nome"
            placeholder="Nome"
          />

          <FormField
            label="Descrição"
            type="text"
            name="descricao"
            placeholder="Descrição"
            multiline
            rows={4}
          />

          <aside>
            <button type="submit">Salvar</button>
            <button className="clean">Limpar</button>
          </aside>
        </form>

        <ContentLink>
          <Link to="/cadastro/categoria">Cadastro Categoria →</Link>
        </ContentLink>
      </Content>
    </PageDefault>
  );
}

export default CadastroVideo;
