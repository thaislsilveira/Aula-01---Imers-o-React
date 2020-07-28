import React from 'react';

import Menu from '../Menu';
import Footer from '../Footer';

import GlobalStyles from '../../styles/global';

import { Main } from './styles';

function PageDefault({ children }) {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;
