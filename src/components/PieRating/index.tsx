export type PieProps = {
    colour: string;
    percentage: number;
    isSmall?: boolean;
};

const strokePct = (percentage: number) => ((100 - percentage) * 2 * Math.PI * 45) / 100;

export const PieRating = ({ percentage, colour = '#FFE000', isSmall = false }: PieProps) => {
    return (
        <svg width={isSmall ? "120" : "150"} height={isSmall ? "120" : "150"} viewBox={isSmall ? "0 0 120 120" : "0 0 150 150"} xmlns="http://www.w3.org/2000/svg">
            <circle cx={isSmall ? "60" : "75"} cy={isSmall ? "60" : "75"} r={isSmall ? "35" : "45"} fill="#0000007F"/>

            <circle cx={isSmall ? "60" : "75"} cy={isSmall ? "60" : "75"} r={isSmall ? "35" : "45"} stroke="#555" strokeWidth={isSmall ? "5" : "7"} fill="none"/>

            <circle cx={isSmall ? "60" : "75"} cy={isSmall ? "60" : "75"} r={isSmall ? "35" : "45"} stroke={colour} strokeWidth={isSmall ? "5" : "7"} fill="none"
                    strokeDasharray="282.74" strokeDashoffset={strokePct(percentage)} strokeLinecap="round"
                    transform="rotate(0 75 75)"/>

            <text x="47%" y="50%" fill={colour} fontSize="16" fontFamily={"'Montserrat', sans-serif"}
                  fontWeight="bold"
                  textAnchor="middle" alignmentBaseline="middle"
            >
                {percentage}
                <tspan fontSize="10" fill="white" x="57%" y="53%">%</tspan>
            </text>
        </svg>
    );
};

