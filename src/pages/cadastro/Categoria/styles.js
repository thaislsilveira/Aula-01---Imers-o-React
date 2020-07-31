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
  overflow: auto;
  max-width: 100%;
`;

export const ContentTable = styled.table`
  border: 4px solid #7159c1;
  box-sizing: border-box;
  border-spacing: 0 25px;
  font-size: 16px;
  width: 100%;
  text-align: left;
  white-space: nowrap;

  tr:nth-of-type(odd) {
    background: #171325;
  }

  th {
    background: black;
  }

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
    color: #fff;
    border: none;
    height: 36px;
  }

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block !important;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tbody td {
      /* Behave  like a "row" */
      border: none;
      position: relative;
      padding: 10px 0;
      padding-left: 50%;
      margin-bottom: 4px;
      white-space: normal;
    }

    tbody tr {
      border-bottom: 4px solid #7159c1;
    }

    tbody td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 10px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    /*
	Label the data
	*/
    tbody td:nth-of-type(1):before {
      content: 'Nome';
    }
    tbody td:nth-of-type(2):before {
      content: 'Descrição';
    }
    tbody td:nth-of-type(3):before {
      content: 'Editar';
    }
    tbody td:nth-of-type(4):before {
      content: 'Remover';
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
