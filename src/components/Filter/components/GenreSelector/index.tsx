import {Label, Select} from "../../styles.ts";
import React, {useState} from "react";
import {Genre} from "../../../../types/genre.ts";

type GenreSelectorProps = {
    label: string;
    defaultValue: string;
    options: Genre[]
    handleSelectChange: (value: string) => void;
}
export const GenreSelector = ({ label, defaultValue, options, handleSelectChange }: GenreSelectorProps) => {
    const [valueInput, setValueInput] = useState<string>(defaultValue);

    const handleSelect = (e: React.MouseEvent<HTMLSelectElement>) => {
        e.preventDefault();
        handleSelectChange(valueInput);
    }
    return (
        <Label>
            {label}
            <Select
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
                onMouseOutCapture={(e) => handleSelect(e)}
            >
                <option value="">Selecione o gênero</option>
                {options.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
            </Select>
        </Label>
    )
}