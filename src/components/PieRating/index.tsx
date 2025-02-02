export interface PieProps {
    colour: string;
    percentage: number;
}
const cleanPercentage = (percentage: number) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
    const isTooHigh = percentage > 100;
    if (isNegativeOrNaN) return 0;
    if (isTooHigh) return 100;
    return +percentage;
};

const Circle = ({ colour, percentage, isFill = false }: PieProps & { isFill?: boolean }) => {
    const r = 50;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
    return (
        <circle
            r={r}
            cx={100}
            cy={100}
            fill={isFill ? '#0000007F' : 'transparent'}
            stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
            strokeWidth={isFill ? ".1rem" : "1rem"}
            strokeDasharray={circ}
            strokeDashoffset={percentage ? strokePct : 0}
        ></circle>
    );
};

const Text = ({ colour, percentage }: PieProps) => {
    return (
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"1.4rem"}
            fill={colour}
        >
            {percentage.toFixed(0)}%
        </text>
    );
};

export const PieRating = ({ percentage, colour }: PieProps) => {
    const pct = cleanPercentage(percentage);
    return (
        <svg width={200} height={200}>
            <g transform={`rotate(230 ${"100 100"})`}>
                <Circle colour='#0000007F' percentage={0} isFill={true}/>
                <Circle colour="#FFFFFF44" percentage={100}/>
                <Circle colour={colour} percentage={pct}/>
            </g>
            <Text colour={colour} percentage={pct}/>
        </svg>
    );
};


