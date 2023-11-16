'use client'
import { useState } from 'react';

const Tooltip = ({ text = "Hola", children }) => {
    const [ showTooltip, setShowTooltip ] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="relative inline-block">
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="whitespace-nowrap"
            >
                {children}
            </div>
            {showTooltip && (
                <p className="absolute z-10 bg-white text-black rounded-lg p-2 mt-2 text-sm whitespace-nowrap">
                    {text}
                </p>
            )}
        </div>
    );
};

export default Tooltip;