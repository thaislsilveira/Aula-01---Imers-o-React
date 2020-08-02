import React from 'react';

import Lottie from 'lottie-react';
import PageDefault from '../../components/PageDefault';
import groovyWalkAnimation from './23724-home-workout.json';

import { Content, ContentImg, ContentText } from './styles';

function Pagina404() {
  return (
    <>
      <PageDefault>
        <Content>
          <ContentImg>
            <Lottie animationData={groovyWalkAnimation} />
          </ContentImg>
          <ContentText>
            <h1>Página não encontrada!</h1>
          </ContentText>
        </Content>
      </PageDefault>
    </>
  );
}

export default Pagina404;
