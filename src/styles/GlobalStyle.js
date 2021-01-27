import { createGlobalStyle } from 'styled-components';


export const theme = {
    colors: {
      primary: '#33eaff',
      secondary: '#76ff03',
      bgColor: '#130f40'
    },
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;

//import ( GlobalStyle ) from 'GlobalStyle.js';