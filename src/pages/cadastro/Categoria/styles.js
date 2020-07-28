import styled from 'styled-components';

export const Content = styled.div`
  form {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 10px auto;
    label {
      font-size: 18px;
      font-weight: bold;
      margin: 15px 0;
    }
    input {
      border: 1px solid rgba(0, 0, 0, 0.2);
      background-color: #53585d;
      padding: 10px;
      border-radius: 4px;
      padding: 10px 15px;
      margin-right: 10px;
      margin-bottom: 20px;

      &::placeholder {
        color: var (--white);
      }
    }
    textarea {
      background-color: #53585d;
      height: 90px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      padding: 10px 15px;
      margin-right: 10px;
      margin-bottom: 20px;
    }
  }
`;
