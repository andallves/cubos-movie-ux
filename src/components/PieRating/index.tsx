export type PieProps = {
    colour: string;
    percentage: number;
    isSmall?: boolean;
};

const strokePct = (percentage: number) => ((100 - percentage) * 2 * Math.PI * 45) / 100;

export const PieRating = ({ percentage, colour = '#FFE000' }: PieProps) => {
    return (
        <svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
            <circle cx="75" cy="75" r="45" fill="#0000007F"/>

            <circle cx="75" cy="75" r="45" stroke="#555" stroke-width="7" fill="none"/>

            <circle cx="75" cy="75" r="45" stroke={colour} stroke-width="7" fill="none"
                    stroke-dasharray="282.74" stroke-dashoffset={strokePct(percentage)} stroke-linecap="round"
                    transform="rotate(-90 75 75)"/>

            <text x="47%" y="50%" fill={colour} font-size="16" fontFamily={"'Montserrat', sans-serif"}
                  font-weight="bold"
                  text-anchor="middle" alignment-baseline="middle"
            >
                {percentage}
                <tspan fontSize="10" fill="white" x="57%" y="53%">%</tspan>
            </text>
        </svg>
    );
};

