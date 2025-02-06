import  { createGlobalStyle } from 'styled-components';

export const GlobalStyles =  createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%;
    }
    
    body {
        font-family: ${({ theme }) => theme.fonts.family.default};
        font-size: ${({ theme }) => theme.fonts.sizes.small};
        line-height: ${({ theme }) => theme.fonts.sizes.medium};
    }
    
    button {
      border: none;
    }
`;