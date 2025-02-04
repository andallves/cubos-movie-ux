import React, {useState} from "react";
import {Label, Select} from "../../styles.ts";
import {MovieLengthEnum} from "../../../../enums/movieLength.ts";

type LengthSelectorProps = {
    label: string;
    defaultValue: MovieLengthEnum;
    handleSelectedChange: (value: number) => void;
}

export const LengthSelector = ({ label, defaultValue, handleSelectedChange }: LengthSelectorProps) => {
    const [inputLength, setInputLength] = useState<MovieLengthEnum>(defaultValue);

    const handleChange = (event: React.MouseEvent<HTMLSelectElement>) => {
        event.preventDefault();
        handleSelectedChange(inputLength);
    }
    return (
        <Label>
            {label}
            <Select
                value={inputLength}
                onChange={(e) => setInputLength(Number(e.target.value))}
                onMouseOutCapture={(e) => handleChange(e)}
            >
                <option value={MovieLengthEnum.todos}>Todos</option>
                <option value={MovieLengthEnum.curta}>Curta (menos de 60 minutos)</option>
                <option value={MovieLengthEnum.media}>Média (60-120 minutos)</option>
                <option value={MovieLengthEnum.longa}>Longa (mais de 120 minutos)</option>
            </Select>
        </Label>
    );
}