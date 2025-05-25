import React from "react";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

export function ProgressRing({value = 0, title}) {
    return (
        <div className="w-24 h-24">
            <CircularProgressbar
                value={value}
                text={value + '%'}
                styles={buildStyles({
                    textSize: '16px',
                    pathColor: '#007AFF',
                    textColor: '#007AFF',
                    trailColor: '#e5e7eb',
                })}
            />
            <div className="text-sm text-gray-500 w-full text-center mt-2">{title}</div>
        </div>
    )
}