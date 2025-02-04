import React, {useState} from "react";
import {PopularityMovies} from "../../../../types/filter.ts";
import {Label, Select} from "../../styles.ts";

type PopularitySelectorProps = {
    label: string;
    defaultValue: string;
    options: PopularityMovies[];
    handleSelectedChange: (value: string) => void;
}

export const PopularitySelector = ({label, defaultValue, options, handleSelectedChange }: PopularitySelectorProps) => {
    const [inputPopularity, setInputPopularity] = useState<string>(defaultValue);

    const handleChange = (event: React.MouseEvent<HTMLSelectElement>) => {
        event.preventDefault();
        handleSelectedChange(inputPopularity);
    }

    return (
        <Label>
            {label}
            <Select
                value={inputPopularity}
                onChange={(e) => setInputPopularity(e.target.value)}
                onMouseOutCapture={(e) => handleChange(e)}
            >
                <option value="">Todos</option>
                {options.map((popularity) => <option key={popularity.value} value={popularity.value}>{popularity.name}</option>)}
            </Select>
        </Label>
    );
}