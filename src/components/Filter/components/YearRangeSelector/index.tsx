import {Label, Select, SelectContainer} from "./styles.ts";
import React, {useState} from "react";

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
            <span>{label}</span>

            <SelectContainer>
                <Select
                    value={inputStartYear ?? ""}
                    onChange={(e) => setInputStartYear(e.target.value)}
                >
                    <option value="">Selecione o ano inicial</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                        {year}
                        </option>
                    ))}
                </Select>
                a
                <Select
                    value={inputEndYear ?? ""}
                    onChange={(e) => setInputEndYear(e.target.value)}
                    onMouseOutCapture={(e) => handleChange(e)}
                >
                    <option value="">Selecione o ano final</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                        {year}
                        </option>
                    ))}
                </Select>
            </SelectContainer>
        </Label>
    )
}