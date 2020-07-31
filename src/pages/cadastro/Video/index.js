import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import videoRepository from '../../../repositories/videos';
import categoriaRepository from '../../../repositories/categorias';

import { Content, ContentLink } from './styles';

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

function CadastroVideo() {
  const valoresIniciais = {
    titulo: '',
    url: '',
    categoria: '',
  };

  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const { handleChange, valores } = useForm(valoresIniciais);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const timer = React.useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    timer.current = setTimeout(async () => {
      try {
        await videoRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: valores.categoria,
        });

        history.push('/');
        toast.success('Vídeo cadastrado com sucesso!');
      } catch (err) {
        toast.error('Ocorreu um erro, verifique seu dados!');
      } finally {
        setLoading(false);
      }
    }, 2000);
  }

  useEffect(() => {
    categoriaRepository.getAll().then((categoriasFromSever) => {
      setCategorias(categoriasFromSever);
    });
  }, []);

  return (
    <PageDefault>
      <Content>
        <h1>Novo Vídeo</h1>

        <form onSubmit={handleSubmit}>
          <FormField
            label="Título"
            type="text"
            name="titulo"
            value={valores.titulo}
            onChange={handleChange}
          />
          <FormField
            label="Link do vídeo"
            type="text"
            name="url"
            value={valores.url}
            onChange={handleChange}
          />
          <FormField
            label="Escolha uma categoria"
            select
            name="categoria"
            value={valores.categoria}
            onChange={handleChange}
          >
            {categorias.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.titulo}
              </MenuItem>
            ))}
          </FormField>

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
          <Link to="/cadastro/categoria">Cadastro Categoria →</Link>
        </ContentLink>
      </Content>
    </PageDefault>
  );
}

export default CadastroVideo;
