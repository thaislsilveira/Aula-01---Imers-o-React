import styled from 'styled-components';

export const Content = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    textarea {
      background-color: #53585d;
      font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
      height: 90px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      padding: 10px 15px;
      margin-right: 10px;
      margin-bottom: 20px;
    }

    aside {
      button.clean {
        background: #9e9e9e;
      }

      button {
        font-weight: bold;
        margin-left: 10px;
        border-radius: 2px;
        padding: 0px 15px;
        background: #2a7ae4;
        color: #fff;
        border: none;
        height: 36px;
      }
    }
  }
`;

export const ContentLink = styled.div`
  padding: 40px 10px;

  a {
    color: var(--white);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: #7159c1;
    }
  }
`;
