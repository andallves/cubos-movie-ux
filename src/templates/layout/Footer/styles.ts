import styled, {css} from "styled-components";

export const FooterContainer = styled.footer`
    ${({ theme }) => css`
        display: flex;
        width: 100%;
        min-width: 32rem;
        flex-direction: column;
        align-items: flex-start;
        padding: ${theme.spacings.xsmall};
    
        background: #121113;
        border-top: 1px solid rgba(241, 230, 253, 0.19);
        
        @media (min-width: 768px) {
            padding: ${theme.spacings.small};
        }
    `};
`;

export const Text = styled.span`
    flex: 1 0 0;
    align-self: stretch;
    color: #B5B2BC;

    text-justify: auto;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`