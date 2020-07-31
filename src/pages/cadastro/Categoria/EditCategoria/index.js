import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from 'react-toastify';
import FormField from '../../../../components/FormField';
import PageDefault from '../../../../components/PageDefault';
import useForm from '../../../../hooks/useForm';

import categoriaRepository from '../../../../repositories/categorias';

import { Content, ContentLink } from '../styles';

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

function EditarCategoria() {
  const { id } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const valoresIniciais = [];
  const timer = React.useRef();

  const { handleChange, valores, setValues } = useForm(valoresIniciais);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    timer.current = setTimeout(async () => {
      try {
        await categoriaRepository.update({
          titulo: valores.titulo,
          descricao: valores.descricao,
          cor: valores.cor,
          id: valores.id,
        });

        history.push('/cadastro/categoria');
        toast.success('Categoria alterada com sucesso!');
      } catch (err) {
        toast.error('Ocorreu um erro, verifique seu dados!');
      } finally {
        setLoading(false);
      }
    }, 2000);
  }

  useEffect(() => {
    categoriaRepository.getOne(id).then((response) => {
      setValues(response);
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
        {/* <ContentLink>
          {categorias.length === 0 && <div>Carregando...</div>}
        </ContentLink> */}

        <ContentLink>
          <Link to="/cadastro/categoria">← Voltar</Link>
        </ContentLink>
      </Content>
    </PageDefault>
  );
}

export default EditarCategoria;
