import {Label, Select} from "../../styles.ts";
import React, {useState} from "react";
import {ClassificationMovies} from "../../../../types/filter.ts";

type ClassificationSelectorProps = {
    label: string;
    defaultValue: string;
    options: ClassificationMovies[];
    handleSelectChange: (value: string) => void;
}

export const ClassificationSelector = ({ label, defaultValue, options, handleSelectChange }: ClassificationSelectorProps) => {
    const [inputCertification, setInputCertification] = useState<string>(defaultValue)

    const handleChange = (e: React.MouseEvent<HTMLSelectElement>) => {
        e.preventDefault();
        handleSelectChange(inputCertification);
    }

    return (
        <Label>
            {label}
            <Select
                value={inputCertification}
                onChange={(e) => setInputCertification(e.target.value)}
                onMouseOutCapture={(e) => handleChange(e)}
            >
                <option value="">Selecione uma classificação</option>
                {options.map((co) => <option value={co.value} key={co.value}>{co.name}</option>)}
            </Select>
        </Label>
    )
}