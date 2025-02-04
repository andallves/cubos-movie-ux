import {StyledSVG} from "./styles.ts";

export interface ArrowIconProps {
    isLeft?: boolean;
    $active?: boolean;
}

export const ArrowIcon = ({$active = false, isLeft = false}: ArrowIconProps) => (
    <StyledSVG
        $active={$active}
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="18"
        viewBox="0 0 9 15"
        fill="none"
    >
        <path
            d={isLeft ? "M1.5 1L7.5 7L1.5 13" : "M7.5 1.5L1.5 7.5L7.5 13.5"}
            stroke="var(--stroke-color)"
            strokeOpacity="var(--stroke-opacity)"
            strokeWidth="2"
        />
    </StyledSVG>
)
;