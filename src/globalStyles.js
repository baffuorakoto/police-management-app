import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
    --color-primary:#08103e;
    --color-secondary:#394065 ;
    --color-accent: #86d4e6 ;
    --color-dark: #84889f;
    --color-white: #ffffff;
  }
  *,*:before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    color: var(--color-dark);
    font-family: 'Lato', sans-serif;
    background-color: var(--color-secondary);
  }


  body {    font-family: 'Lato', sans-serif !important;
  }

  .uk-button-primary {
      background-color: var(--color-accent);
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--color-primary); 
         border-radius: .3rem;
         margin-top: 1.6rem;
  }

  .uk-nav-primary>li.uk-active>a {
    color: var(--color-accent)
  }
  .uk-input{
    background-color: var(--color-secondary) !important;
    text-transform: uppercase;
    border: none;
    border-radius: .3rem;

  }
  .uk-active {
    color: var(--color-accent) !important;
  }
`;

export default GlobalStyle;
