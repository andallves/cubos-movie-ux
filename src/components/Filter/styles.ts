import styled, {css} from "styled-components";

export const Form = styled.form`
    ${({ theme }) => css`
        position: relative;
        display: flex;
        margin: 1.6rem;
        padding: ${theme.spacings.xsmall};
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: ${({ theme }) => theme.spacings.xsmall};;
        
        box-sizing: border-box;

        border-radius: 4px;
        border: 1px solid #49474E;
        background: ${theme.colors.gray50};
        
        @media (min-width: 768px) {
            // flex-direction: row;
            gap: ${({ theme }) => theme.spacings.small};;
        }
  `}
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacings.xsmall};
    
    @media (min-width: 768px) {
        flex-direction: row;
        gap: ${({ theme }) => theme.spacings.small};
    }
    
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
`;

export const Select = styled.select`
    background: ${({theme}) => theme.colors.gray50};
    padding: .4rem;
    border-radius: .4rem;
    color: white;
    width: 100%;
`;

export const Input = styled.input`
    ${({ theme }) => css`
        display: flex;
        max-width: 100%;
        justify-content: space-between;
        align-items: center;
        flex: 1 0 0;
        outline: none;
        border: none;
        background: ${theme.colors.gray60};

        color: ${theme.colors.gray30};
        text-align: start;
        font-family: ${theme.fonts.family.secondary};;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
  `}
`;

export const ButtonFilter = styled.button<{$active: boolean}>`
    display: flex;
    width: 100%;
    min-height: 4.4rem;
    padding: 1.2rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    align-self: stretch;
    
    color: white;
    font-weight: bold;
    font-size: 1.6rem;

    border-radius: .2rem;
    background: ${({ $active }) => ($active ? '#8E4EC6' : 'rgba(183, 68, 247, 0.08)')};
    backdrop-filter: blur(.2rem);
    cursor: pointer;
`;

export const SearchIcon = styled.img`
    width: 2.4rem;
    height: 2.4rem;
`;