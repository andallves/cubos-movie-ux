import React, {useState} from "react";
import {LanguageMovies} from "../../../../types/filter.ts";
import {Label, Select} from "../../styles.ts";

type LanguageSelectorProps = {
    label: string;
    defaultValue: string;
    options: LanguageMovies[];
    handleSelectedChange: (value: string) => void;
}

export const LanguageSelector = ({ label, defaultValue, options, handleSelectedChange }: LanguageSelectorProps) => {

    const [inputLanguage, setInputLanguage] = useState<string>(defaultValue);

    const handleChange = (event: React.MouseEvent<HTMLSelectElement>) => {
        event.preventDefault();
        handleSelectedChange(inputLanguage);
    }
    return (
        <Label>
            {label}
            <Select
                value={inputLanguage}
                onChange={(e) => setInputLanguage(e.target.value)}
                onMouseOutCapture={(e) => handleChange(e)}
            >
                <option value="">Todos</option>
                {options.map((language) => <option value={language.code} key={language.code}>{language.name}</option>)}
            </Select>
        </Label>
    );
}