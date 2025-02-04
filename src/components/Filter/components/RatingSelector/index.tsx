import React, {useState} from "react";
import {Label, Select} from "../../styles.ts";

type RatingSelectorProps = {
    label: string;
    defaultValue: string;
    options: number[];
    handleSelectedChange: (value: string) => void;
}

export const RatingSelector = ({ label, defaultValue, options, handleSelectedChange }: RatingSelectorProps) => {
   const [inputRating, setInputRating] = useState<string>(defaultValue);

    const handleChange = (event: React.MouseEvent<HTMLSelectElement>) => {
        event.preventDefault();
        handleSelectedChange(inputRating);
    }

    return (
        <Label>
            {label}
            <Select
                value={inputRating ?? ""}
                onChange={(e) => setInputRating(e.target.value)}
                onMouseOutCapture={(e) => handleChange(e)}
            >
                <option value="">Selecione a avaliação</option>
                {options.map((rating) => (
                    <option key={rating} value={rating}>
                        {rating}
                    </option>
                ))}
            </Select>
        </Label>
    );
}