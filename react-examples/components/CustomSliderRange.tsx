import React, { useState } from 'react';

const CustomRange = () => {
    const [value, setValue] = useState(50);
    return (
        <>
            <input
                onChange={(e) => {
                    const rangeVal = parseInt(e.target.value);
                    setValue(rangeVal);
                }}
                type="range"
                min={1}
                max={100}
                value={value}
                className="range"
                id="myRange"
            />
            <style jsx>
                        {`  
.range {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 200px;
    height: 20px;
    padding: 16px;
    background: #e0e0e0;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 2px 2px 8px black;
}

.range:focus {
    outline: none;
}

.range::-webkit-slider-runnable-track {
    display: flex;
    align-items: center;
    height: 10px;
    border-radius: 10px;
    box-shadow: inset 2px 2px 8px black;
}

.range::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    top: -50%;
    width: 20px;
    height: 20px;
    background-color: #e0e0e0;
    background-image: linear-gradient(-45deg, white, transparent);
    border-radius: 50%;
    box-shadow: 1px 1px 2px black;
}

/* moz-kit might need to be added */
`}
            </style>
        </>
    )
}

export default CustomRange;