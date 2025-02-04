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
        gap: ${({ theme }) => theme.spacings.small};
    }
    
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    
    &.release-year:first-child:not {
        flex-direction: row;
    }
`;

export const Select = styled.select`
    background: ${({theme}) => theme.colors.gray50};
    padding: .4rem;
    border-radius: .4rem;
    color: white;
    width: 100%;
    
    &:focus {
        outline: .2rem solid #8E4EC6
    }
    
    option:checked {
        background: #8E4EC6;
    }
`;

export const Input = styled.input`
    ${({ theme }) => css`
        display: flex;
        max-width: 100%;
        justify-content: space-between;
        align-items: center;
        flex: 1 0 0;
        outline: 1px solid rgb(118, 118, 118);
        padding: .4rem;
        border: none;
        border-radius: .4rem;
        background: ${theme.colors.gray60};

        color: ${theme.colors.white};
        text-align: start;
        font-family: ${theme.fonts.family.secondary};;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        
        &:focus {
            outline: .2rem solid #8E4EC6
        }
  `}
`;

export const ButtonFilter = styled.button<{$isLoading: boolean}>`
    display: flex;
    width: 100%;
    min-height: 4.4rem;
    padding: ${({ $isLoading }) => ( $isLoading ? '1rem 1.6rem' : '1.2rem 2rem')};
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    align-self: stretch;

    color: white;
    font-weight: bold;
    font-size: 1.6rem;

    border-radius: .2rem;
    background: #8E4EC6;
    backdrop-filter: blur(.2rem);
    cursor: pointer;
    transition: all .5s ease-in-out;

    &:hover, &:disabled {
        background: rgba(99, 50, 141, 0.94);
        color: rgba(255, 255, 255, 0.6);
    }
    
    &:disabled {
        cursor: auto;
    }
    
    span.rli-d-i-b.commet-rli-bounding-box, .rli-d-i-b.commet-indicator {
        width: 30px;
        height: 30px;
    }
    
    .rli-d-i-b.commet-indicator > .rli-d-i-b.commet-box:first-child {
        width: 40%;
        height: 40%;
    }

    .rli-d-i-b.commet-indicator > .rli-d-i-b.commet-box:nth-child(2) {
        width: 70%;
        height: 70%;
    }
`;