import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

import { Content, ContentTable, TableContainer } from './styles';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setCategoria({
      ...categoria,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, categoria]);

    setCategoria(valoresIniciais);
  }

  return (
    <PageDefault>
      <Content>
        <h1>Nova Categoria: {categoria.nome}</h1>

        <form onSubmit={handleSubmit}>
          <FormField
            label="Nome"
            type="text"
            name="nome"
            placeholder="Nome"
            value={categoria.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="text"
            name="descricao"
            placeholder="Descrição"
            value={categoria.descricao}
            onChange={handleChange}
            multiline
            rows={4}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            placeholder="Cor"
            value={categoria.cor}
            onChange={handleChange}
          />
          <aside>
            <button type="submit">Salvar</button>
            <button className="clean">Limpar</button>
          </aside>
        </form>
        <TableContainer>
          <ContentTable>
            {categorias[0] === undefined ? (
              <h1>Não existe categoria cadastrada!</h1>
            ) : (
              <>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Editar</th>
                    <th>Remover</th>
                  </tr>
                </thead>
                <tbody>
                  {categorias.map((categoria, indice) => (
                    <tr key={`${categoria}${indice}`}>
                      <td>{categoria.nome}</td>
                      <td>{categoria.descricao}</td>
                      <td>Editar</td>
                      <td>Remover</td>
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </ContentTable>
        </TableContainer>
      </Content>
    </PageDefault>
  );
}

export default CadastroCategoria;
