import styled from 'styled-components';
import backgroundImage from './assets/backgropund-krists-luhaers-unsplash.png';

export const BackgroundContainer = styled.div`
    box-sizing: border-box;
    position: relative;
    background: lightgray url(${backgroundImage}) no-repeat fixed 0;
    z-index: 10;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(26, 26, 26, 0.7) 0%, #121113 50%, #121113 100%);
    }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1; 
  color: white;
  text-align: center;
`;
