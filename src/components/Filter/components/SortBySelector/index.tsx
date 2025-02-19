import React, {useState} from "react";
import {SelectorValuesOptions, SortBy} from "../../../../types/filter.ts";
import {Label, Select} from "../../styles.ts";

type SortBySelectorProps = {
    label: string;
    defaultValue: SortBy;
    options: SelectorValuesOptions[];
    handleSelectedChange: (value: SortBy) => void;
}

export const SortBySelector = ({ label, defaultValue, options, handleSelectedChange }: SortBySelectorProps) => {
    const [inputSortBy, setInputSortBy] = useState<SortBy>(defaultValue);

    const handleChange = (event: React.MouseEvent<HTMLSelectElement>) => {
        event.preventDefault();
        handleSelectedChange(inputSortBy);
    }
    return (
        <Label>
            {label}
            <Select
                value={inputSortBy}
                onChange={(e) => setInputSortBy(e.target.value as SortBy)}
                onMouseOutCapture={(e) => handleChange(e)}
                aria-label={label}
                aria-describedby={`${label}-help`}
            >
                <option value="">Ordenar por</option>
                {options.map(order => <option value={order.id} key={order.id}>{order.name}</option>)}
            </Select>
            <span id={`${label}-help`} style={{display: "none"}}>
                Selecione um {label} para filtrar os filmes.
            </span>
        </Label>
    );
}