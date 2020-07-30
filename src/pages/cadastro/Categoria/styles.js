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

export const TableContainer = styled.div`
  padding: 40px 10px;
`;

export const ContentTable = styled.table`
  border: 4px solid #7159c1;
  box-sizing: border-box;
  border-spacing: 0 25px;
  font-size: 16px;
  width: 100%;
  text-align: left;
  white-space: nowrap;

  thead {
    tr {
      font-size: 18px;
    }
    th {
      padding: 10px 0 20px 0;
      border: 4px solid #7159c1;
      padding-left: 10px;
      font-weight: bold;
    }
  }
  tbody tr {
    height: 57px;
  }

  tbody td {
    padding: 10px 0 20px 0;
    padding-left: 10px;
    border: 4px solid #7159c1;
    padding-right: 50px;
    margin-bottom: 25px;
    border-radius: 4px;
  }

  button {
    font-weight: bold;
    margin-left: 10px;
    border-radius: 2px;
    padding: 0px 15px;
    background: #dd1313;
    color: #fff;
    border: none;
    height: 36px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ContentLink = styled.div`
  padding: 10px 10px;

  a {
    color: var(--white);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: #7159c1;
    }
  }
`;
