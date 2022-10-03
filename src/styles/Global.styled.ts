// import {createGlobalStyle} from "styled-components";
import {createGlobalStyle} from "styled-components";

// import Jost from '../assets/fonts/Jost-VariableFont_wght.ttf';

// type GlobalStylesProps = {
//     theme: {
//         TOKENS: ColorsT
//     };
// };

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    //border: solid #5B6DCD 10px;
  }
  

  * {
    margin: 0;
    font-family: 'Jost', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

  button {
    cursor: pointer;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  span {
    font-variation-settings: 'wght' 200;
    font-weight: 200;
  }
  
  b {
    font-variation-settings: 'wght' 700;
    font-weight: 700;
  }

`;
