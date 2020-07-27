import React from 'react';

import Menu from '../Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../BannerMain';
import Carousel from '../Carousel';
import Footer from '../Footer';

import GlobalStyles from '../../styles/global';
import { LayoutWrapper } from './styles';

const Layout = () => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Exercícios que você pode fazer em casa"
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />

      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
