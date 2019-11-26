import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    line-height: 1.2;
    font-family: 'Open Sans', sans-serif;
  }

  html, body, #root {
    min-height: 100%;
    margin: 0;
  }

  body {
    background: #dadada;
    margin: 0;
    -webkit-font-smoothing: antialiased !important;
  }

  .container {
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 0 20px;

    @media (min-width: 1010px) {
      padding: 0;
      width: 1075px;
    }
  }
`;
