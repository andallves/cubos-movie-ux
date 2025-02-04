import styled from "styled-components";

export interface ArrowIconProps {
    $active: boolean;
}

export const StyledSVG = styled.svg<ArrowIconProps>`
    width: 10px;
    height: 18px;
    --stroke-color: ${({ $active }) => ($active ? "#EAE6FD" : "#FFF")};
    --stroke-opacity: ${({ $active }) => ($active ? "0.43" : "1")};
`;