import React from 'react';
import { ToastContainer } from 'react-toastify';

import Menu from '../Menu';
import Footer from '../Footer';

import GlobalStyles from '../../styles/global';

import { Main } from './styles';

function PageDefault({ children, paddingAll, background }) {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <Main paddingAll={paddingAll} background={background}>
        {children}
      </Main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default PageDefault;
