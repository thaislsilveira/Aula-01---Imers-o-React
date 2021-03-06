import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 16px;
  }
`;

const SliderComponent = styled(SlickSlider)`
  margin-bottom: 40px;
  .slick-arrow {
    &:before {
      color: #7159c1;
    }
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;

  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SliderComponent
      {...{
        dots: true,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
      }}
    >
      {children}
    </SliderComponent>
  </Container>
);

Slider.defaultProps = {
  children: React.ReactNode,
};

Slider.propTypes = {
  children: PropTypes.node,
};

export default Slider;
