import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
    font-family: ${({ theme }) => theme.fonts.family.secondary};
`;

export const SelectContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Select = styled.select`
    background: ${({theme}) => theme.colors.gray50};
    padding: .4rem;
    border-radius: .4rem;
    color: white;
    width: 100%;
`;