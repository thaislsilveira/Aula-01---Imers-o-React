import React from 'react';
import Logo from '../../assets/img/logo.png';
import ButtonLink from '../components/ButtonLink';

import { NavAvatar } from './styles';

function Menu() {
  return (
    <NavAvatar>
      <a href="/">
        <img src={Logo} alt="logo" />
      </a>
      <ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink>
    </NavAvatar>
  );
}

export default Menu;
