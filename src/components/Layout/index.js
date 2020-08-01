import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import BannerMain from '../BannerMain';
import Carousel from '../Carousel';

import categoriasRepository from '../../repositories/categorias';

import PageDefault from '../PageDefault/index';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#7159c1',
    backgroundColor: 'rgba(0, 0, 0, 0.83)',
  },
}));

const Layout = () => {
  const [dadosIniciais, setDatosIniciais] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const timer = React.useRef();

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoryWithVideo) => {
        setDatosIniciais(categoryWithVideo);
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
      <PageDefault paddingAll={0} background="white">
        {dadosIniciais.length === 0 && <div>Carregando...</div>}

        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={dadosIniciais[0].videos[0].description}
                />
                <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
              </div>
            );
          }

          return <Carousel key={categoria.id} category={categoria} />;
        })}
      </PageDefault>
    </>
  );
};

export default Layout;
