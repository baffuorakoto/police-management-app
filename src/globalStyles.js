import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
    --color-primary:#08103e;
    --color-secondary:#394065 ;
    --color-primary-shade: #1b2246;
    --color-accent: #86d4e6 ;
    --color-accent-dark: #6baab8;
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
      text-transform: uppercase;         
  }
  
.uk-button-primary:hover {
  background-color: var(--color-accent-dark);
  color: var(--color-primary);

}

  h1 {
    color: white;
    text-transform: uppercase;

    font-size: 1.8rem;
    font-weight: bolder;
  }
  h2 {
    color: white;
    text-transform: uppercase;

    font-size: 1.5rem;
    font-weight: bolder;
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
