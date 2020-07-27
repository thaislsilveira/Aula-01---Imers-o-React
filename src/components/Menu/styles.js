import styled from 'styled-components';

export const NavAvatar = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 2px solid #7159c1;

  img {
    height: 40px;
  }

  @media (max-width: 800px) {
    a {
      width: 100%;
      img {
        margin: auto;
        display: block;
        max-width: 105px;
      }
    }
  }

  .ButtonLink {
    color: #7159c1;
    border: 1px solid #7159c1;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity 0.3s;
  }

  .ButtonLink:hover,
  .ButtonLink:focus {
    opacity: 0.5s;
  }

  @media (max-width: 800px) {
    a.ButtonLink {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: #7159c1;
      color: var(--white);
      border-radius: 0;
      border: 0;
      text-align: center;
    }
  }
`;
