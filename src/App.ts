import styled from 'styled-components';
import backgroundImage from './assets/backgropund-krists-luhaers-unsplash.png';

// Componente estilizado para o container com a imagem de fundo e a sobreposição
export const BackgroundContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh; /* Altura total da viewport */
		background-color: black;
    background-image: url(${backgroundImage}); /* Substitua pelo caminho da sua imagem */
    background-size: cover;
    background-position: center;
		z-index: 10;

    /* Sobreposição preta com opacidade */
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

// Componente de conteúdo que ficará sobre a imagem de fundo
export const Content = styled.div`
  position: relative;
  z-index: 1; /* Garante que o conteúdo fique acima da sobreposição */
  color: white; /* Cor do texto para contrastar com o fundo */
  text-align: center;
`;
