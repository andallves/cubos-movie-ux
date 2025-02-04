import styled from "styled-components";

export const PaginationContainer = styled.div`
    float: left;
    display: flex;
    width: 100%;
    padding: 1.6rem;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background: #121113;
    
    @media (min-width: 768px) {
        padding: 2.4rem;
    }
`;

interface ButtonProps {
    $active?: boolean;
}
export const Button = styled.button<ButtonProps>`
    display: flex;
    min-height: 44px;
    padding: 12px 20px;
    align-items: flex-start;
    gap: 12px;

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
`;

export const Text = styled.span<ButtonProps>`
    color: ${({ $active }) => $active ? '#EAE6FD6E' : '#FFF' };
    text-align: center;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:hover {
        color: #EAE6FD6E;
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

