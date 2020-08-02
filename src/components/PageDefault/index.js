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
  children: React.ReactNode,
  background: '',
  paddingAll: 4,
};

PageDefault.propTypes = {
  paddingAll: PropTypes.number,
  children: PropTypes.node,
  background: PropTypes.string,
};

export default PageDefault;
