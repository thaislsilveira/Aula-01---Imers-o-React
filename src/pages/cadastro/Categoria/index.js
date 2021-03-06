import React, { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Link, useHistory } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import categoriaRepository from '../../../repositories/categorias';
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#7159c1',
    backgroundColor: 'rgba(0, 0, 0, 0.83)',
  },
}));

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#ffffff',
  };

  const history = useHistory();
  const { handleChange, valores, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const timer = React.useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    timer.current = setTimeout(async () => {
      try {
        await categoriaRepository.create({
          titulo: valores.titulo,
          descricao: valores.descricao,
          cor: valores.cor,
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
      await categoriaRepository.remove({
        id,
      });
      const updatedList = categorias.filter((item) => item.id !== id);
      setCategorias(updatedList);

      toast.success('A categoria foi excluída com sucesso!');
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
    categoriaRepository
      .getAll()
      .then((response) => {
        clearTimeout(timer.current);
        setCategorias([...response]);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        timer.current = setTimeout(async () => {
          setOpen(false);
        }, 600);
      });
  }, []);

  return (
    <>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
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
              required
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
                    {categorias.map((categoriaItem) => (
                      <tr key={`${categoriaItem.titulo}${categoriaItem.id}`}>
                        <td>{categoriaItem.titulo}</td>
                        <td>{categoriaItem.descricao}</td>
                        <td>
                          <Button
                            variant="contained"
                            disabled={loading}
                            onClick={() =>
                              history.push(`categorias/${categoriaItem.id}`)
                            }
                          >
                            <FaEdit size={13} color="#4D85EE" />
                            Editar
                          </Button>
                        </td>
                        <td>
                          <Button
                            variant="contained"
                            disabled={loading}
                            onClick={() => confirmDelete(categoriaItem.id)}
                          >
                            <FaTrash size={13} color="#DE3B3B" />
                            Remover
                          </Button>
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
    </>
  );
}

export default CadastroCategoria;
