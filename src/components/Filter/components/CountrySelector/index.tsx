import {Label, Select} from "../../styles.ts";
import React, {useState} from "react";
import {LanguageMovies} from "../../../../types/filter.ts";

type CountrySelectorProps = {
    label: string;
    defaultValue: string;
    options: LanguageMovies[];
    handleSelectedChange: (value: string) => void;
}

export const CountrySelector = ({ label, defaultValue, options, handleSelectedChange }: CountrySelectorProps) => {
    const [inputCountry, setInputCountry] = useState<string>(defaultValue);

    const handleChange = (event: React.MouseEvent<HTMLSelectElement>) => {
        event.preventDefault();
        handleSelectedChange(inputCountry);
    }

    return (
        <Label>
            {label}
            <Select value={inputCountry}
                    onChange={(e) => setInputCountry(e.target.value)}
                    onMouseOutCapture={(e) => handleChange(e)}
            >
                <option value="">Todos</option>
                {options.map(language => <option value={language.code} key={language.code}>{language.name}</option>)}
            </Select>
        </Label>
    );
}