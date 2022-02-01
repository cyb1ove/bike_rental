import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    background-color: #F5F5F5;
    font-family: Arial, sans-serif;
  }

  input, select {
    border-radius: 3px;
    outline: none;
    border: none;
    border: 1px solid #D3D3D3;

    &[name=name] {
      flex-basis: 100%;
      width: 20em;
    }

    &[name=type] {
      flex-basis: 100%;
      width: 20em;
    }

    &[name=price] {
      flex-basis: 100%;
      width: 10em;
    }

    &[name=renttime] {
      width: 5em;
    }
  }
`;
