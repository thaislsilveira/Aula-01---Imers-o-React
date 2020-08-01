import React from 'react';
import PropTypes from 'prop-types';
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

PageDefault.defaultProps = {
  children: '',
  background: '',
  paddingAll: '',
};

PageDefault.propTypes = {
  paddingAll: PropTypes.string,
  children: PropTypes.string,
  background: PropTypes.string,
};

export default PageDefault;
