import React, { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import 'react-confirm-alert/src/react-confirm-alert.css';

import useForm from '../../../hooks/useForm';

import { Content, ContentTable, TableContainer, ContentLink } from './styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'inline-block',
    margin: theme.spacing(1),
    position: 'relative',
  },
  wrapperButton: {
    display: 'inline-block',
    margin: theme.spacing(1),
    position: 'relative',
    '& .MuiButton-contained': {
      textTransform: 'initial',
    },
    '& .MuiButton-contained.Mui-disabled': {
      color: 'rgba(117, 117, 117, 0.26)',
      boxShadow: 'none',
      backgroundColor: 'rgba(202, 202, 202, 0.12)',
    },
  },
  buttonProgress: {
    color: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

function CadastroCategoria() {
  const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://fitflix.herokuapp.com/categorias';

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#ffffff',
  };

  const { handleChange, valores, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const timer = React.useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    timer.current = setTimeout(async () => {
      try {
        await fetch(URL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(valores),
        });

        toast.success('Categoria cadastrada com sucesso!');
      } catch (err) {
        toast.error('Ocorreu um erro, verifique seu dados!');
      } finally {
        setLoading(false);
      }

      setCategorias([...categorias, valores]);
      clearForm(valoresIniciais);
    }, 2000);
  }

  async function handleDelete(id) {
    try {
      await fetch(`${URL}/${id}`, {
        method: 'DELETE',
      });

      const updatedList = categorias.filter((item) => item.id !== id);
      setCategorias(updatedList);

      toast.success('A categoria foi excluída');
    } catch (err) {
      toast.error('Não foi possível deletar a categoria');
    }
  }

  function confirmDelete(id) {
    confirmAlert({
      title: 'Confirmação de exclusão',
      message: 'Você quer mesmo excluir essa categoria?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => handleDelete(id),
        },
        {
          label: 'Não',
          onClick: () => {},
        },
      ],
    });
  }

  useEffect(() => {
    fetch(URL).then(async (responseServer) => {
      const response = await responseServer.json();
      clearTimeout(timer.current);
      setCategorias([...response]);
    });
  }, []);

  return (
    <PageDefault>
      <Content>
        <h1>Nova Categoria: {valores.titulo}</h1>

        <form onSubmit={handleSubmit}>
          <FormField
            label="Nome"
            type="text"
            name="titulo"
            placeholder="Nome"
            value={valores.titulo}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="text"
            name="descricao"
            placeholder="Descrição"
            value={valores.descricao}
            onChange={handleChange}
            multiline
            rows={4}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            placeholder="Cor"
            value={valores.cor}
            onChange={handleChange}
          />
          <aside>
            <div className={classes.wrapper}>
              <div className={classes.wrapperButton}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  Salvar
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
            </div>
          </aside>
        </form>
        <ContentLink>
          {categorias.length === 0 && <div>Carregando...</div>}
        </ContentLink>
        <TableContainer>
          <ContentTable>
            {categorias[0] === undefined ? (
              <tbody>
                <tr>
                  <td>Não existe categoria cadastrada!</td>
                </tr>
              </tbody>
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
                  {categorias.map((categoriaItem, index) => (
                    <tr key={`${categoriaItem.titulo}${index}`}>
                      <td>{categoriaItem.titulo}</td>
                      <td>{categoriaItem.descricao}</td>
                      <td>Editar</td>
                      <td>
                        <button onClick={() => confirmDelete(categoriaItem.id)}>
                          Remover
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </ContentTable>
        </TableContainer>
        <ContentLink>
          <Link to="/cadastro/video">← Vídeo</Link>
        </ContentLink>
      </Content>
    </PageDefault>
  );
}

export default CadastroCategoria;
