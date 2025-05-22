import React from "react";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

export function ProgressRing({title}) {
    return (
        <div className="w-24 h-24">
            <CircularProgressbar
                value={36}
                text={`36%`}
                styles={buildStyles({
                    textSize: '16px',
                    pathColor: '#007AFF',
                    textColor: '#007AFF',
                    trailColor: '#e5e7eb',
                })}
            />
            <div className="text-sm mt-2">{title}</div>
        </div>
    )
}