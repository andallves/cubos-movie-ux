import styled from "styled-components";

export const PaginationContainer = styled.div`
    float: left;
    display: flex;
    width: 100%;
    padding: 1.6rem;
    justify-content: center;
    align-items: center;
    gap: .6rem;
    background: #121113;
    
    @media (min-width: 768px) {
        padding: 2.4rem;
        gap: .8rem;
    }
`;

interface ButtonProps {
    $active?: boolean;
}
export const Button = styled.button<ButtonProps>`
    display: flex;
    min-height: 3.8rem;
    padding: .8rem 1.6rem;
    align-items: center;
    //gap: .8rem;

    border-radius: 2px;
    background: ${({ $active }) => $active ? '#EBEAF814' : '#8E4EC6' };
    cursor: pointer;
    
    &:hover {
        background-color: rgba(235, 234, 248, 0.08);
        
        & ~ Text {
            color: #EAE6FD6E;
        }
    }
    
    &:disabled {
        background-color: rgba(235, 234, 248, 0.08);
        cursor: default;
    }

    @media (min-width: 76.8rem) {
        padding: 1.2rem 2rem;
        gap: 1.2rem;
        min-height: 4.4rem;
    }
`;

export const Text = styled.span<ButtonProps>`
    color: ${({ $active }) => $active ? '#EAE6FD6E' : '#FFF' };
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:hover {
        color: #EAE6FD6E;
    }
    
    @media (min-width: 76.8rem) {
        font-size: 1.6rem;
    }
`;

export const Image = styled.img<ButtonProps>`
    display: flex;
    height: 40px;
    padding: 6px 9px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    > path{
        stroke: ${({ $active }) => $active ? '#EAE6FD' : '#FFF' };
    }
  
`;

