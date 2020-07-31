import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import BannerMain from '../BannerMain';
import Carousel from '../Carousel';

import categoriasRepository from '../../repositories/categorias';

import PageDefault from '../PageDefault/index';

const Layout = () => {
  const [dadosIniciais, setDatosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoryWithVideo) => {
        setDatosIniciais(categoryWithVideo);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  return (
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
  );
};

export default Layout;
