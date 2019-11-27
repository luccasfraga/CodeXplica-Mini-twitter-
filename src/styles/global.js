import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Aleo:700&display=swap');

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
    background: rgba(68,0,113,1);
background: -moz-linear-gradient(top, rgba(68,0,113,1) 0%, rgba(144,60,208,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(68,0,113,1)), color-stop(100%, rgba(144,60,208,1)));
background: -webkit-linear-gradient(top, rgba(68,0,113,1) 0%, rgba(144,60,208,1) 100%);
background: -o-linear-gradient(top, rgba(68,0,113,1) 0%, rgba(144,60,208,1) 100%);
background: -ms-linear-gradient(top, rgba(68,0,113,1) 0%, rgba(144,60,208,1) 100%);
background: linear-gradient(to bottom, rgba(68,0,113,1) 0%, rgba(144,60,208,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#440071', endColorstr='#903cd0', GradientType=0 );
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
