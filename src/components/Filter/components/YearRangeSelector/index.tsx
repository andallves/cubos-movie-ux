import {SelectContainer} from "./styles.ts";
import React, {useState} from "react";
import {Label, Select} from "../../styles.ts";

type YearRangeSelectorProps = {
    label: string;
    handleSelectedChange: (selectedStartYear: string, selectedEndYear: string) => void;
}

export const YearRangeSelector = ({ label, handleSelectedChange }: YearRangeSelectorProps) => {

    const [inputStartYear, setInputStartYear] = useState<string>("");
    const [inputEndYear, setInputEndYear] = useState<string>("");
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1900 + 1 }, (_, index) => 1900 + index);

    const handleChange = (event: React.MouseEvent<HTMLSelectElement>) => {
        event.preventDefault();
        handleSelectedChange(inputStartYear, inputEndYear);
    }

    return (
        <Label>
            {label}

            <SelectContainer>
                <Select
                    value={inputStartYear ?? ""}
                    onChange={(e) => setInputStartYear(e.target.value)}
                    aria-label={label}
                    aria-describedby={`${label}-help`}
                >
                    <option value="">Selecione o ano inicial</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </Select>
                <span id={`${label}-help`} style={{display: "none"}}>
                    Selecione um {label} para filtrar os filmes.
                </span>
                a
                <Select
                    value={inputEndYear ?? ""}
                    onChange={(e) => setInputEndYear(e.target.value)}
                    onMouseOutCapture={(e) => handleChange(e)}
                    aria-label={label}
                    aria-describedby={`${label}-help`}
                >
                    <option value="">Selecione o ano final</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </Select>
                <span id={`${label}-help`} style={{display: "none"}}>
                    Selecione um {label} para filtrar os filmes.
                </span>
            </SelectContainer>
        </Label>
    )
}