import { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  .app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    margin-bottom: 20px;
  }

  button {
    cursor: pointer;
  }
`;

export default EstiloGlobal;