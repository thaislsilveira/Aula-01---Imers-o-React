import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import ButtonLink from '../components/ButtonLink';

import { NavAvatar, DefaultSpace } from './styles';

function Menu() {
  return (
    <>
      <DefaultSpace />
      <NavAvatar>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <ButtonLink className="ButtonLink" to="/cadastro/video">
          Novo vídeo
        </ButtonLink>
      </NavAvatar>
    </>
  );
}

export default Menu;
