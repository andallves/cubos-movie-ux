import styled from 'styled-components';
import backgroundImage from './assets/backgropund-krists-luhaers-unsplash.png';

export const BackgroundContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%; 
    background-color: black;
    background-image: url(${backgroundImage});
    background-size: auto;
    background-position: center;
    z-index: 10;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8); /* Preto com opacidade 0.2 */
    }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1; 
  color: white;
  text-align: center;
`;
