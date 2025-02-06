import React, {useState} from "react";
import {SelectorValuesOptions} from "../../../../types/filter.ts";
import {Label, Select} from "../../styles.ts";

type SelectorProps = {
    label: string;
    defaultValue: string;
    options: SelectorValuesOptions[];
    placeholder: string;
    handleSelectedChange: (value: string) => void;
}

export const Selector = ({ label, defaultValue, options, placeholder, handleSelectedChange }: SelectorProps) => {
    const [selectedInput, setSelectedInput] = useState<string>(defaultValue);

    const handleChange = (event: React.MouseEvent<HTMLSelectElement>) => {
        event.preventDefault();
        handleSelectedChange(selectedInput);
    }
    return (
        <Label>
            {label}
            <Select
                value={selectedInput}
                onChange={(e) => setSelectedInput(e.target.value)}
                onMouseOutCapture={(e) => handleChange(e)}
                aria-label={label}
                aria-describedby={`${label}-help`}
            >
                <option value="">{placeholder}</option>
                {options.map(o => <option value={o.id} key={o.id}>{o.name}</option>)}
            </Select>
            <span id={`${label}-help`} style={{display: "none"}}>
                Selecione um {label} para filtrar os filmes.
            </span>
        </Label>
    );
}