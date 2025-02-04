import {StreamingMovies} from "../../../../types/filter.ts";
import {Label, Select} from "../../styles.ts";
import React, {useState} from "react";

type StreamingSelectorProps = {
    label: string;
    defaultValue: string;
    options: StreamingMovies[];
    handleSelectedChange: (value: string) => void;
}

export const StreamingSelector = ({ label, defaultValue, options, handleSelectedChange }: StreamingSelectorProps) => {
    const [inputStreaming, setInputStreaming] = useState<string>(defaultValue);

    const handleChange = (event: React.MouseEvent<HTMLSelectElement>) => {
        event.preventDefault();
        handleSelectedChange(inputStreaming);
    }

    return (
        <Label>
            {label}
            <Select
                value={inputStreaming}
                onChange={(e) => setInputStreaming(e.target.value)}
                onMouseOutCapture={(e) => handleChange(e)}
            >
                <option value="">Todos</option>
                {options.map(streaming => <option value={streaming.id} key={streaming.id}>{streaming.name}</option>)}
            </Select>
        </Label>
    );
}