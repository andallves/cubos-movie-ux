import React, {useState} from "react";
import {Input, Label} from "../../styles.ts";

type MemberMovieInputProps = {
    label: string;
    defaultValue: string;
    placeholder: string;
    handleSelectedChange: (value: string) => void;
}

export const MemberMovieInput = ({ label, defaultValue, placeholder, handleSelectedChange }: MemberMovieInputProps) => {

    const [inputValue, setInputValue] = useState<string>(defaultValue);

    const handleChange = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        handleSelectedChange(inputValue);
    }

    return (
        <Label>
            {label}
            <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onMouseOutCapture={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </Label>
    );
}