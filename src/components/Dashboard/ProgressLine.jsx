import React from "react";

export function ProgressLine() {
    return (
        <div className="w-full md:w-1/3">
            <div className="flex justify-between mb-1 text-sm text-gray-600 font-medium">
                <span>Прогресс</span>
                <span className="text-[#007AFF]">36%</span> {/* можно динамически */}
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-[#007AFF] h-2 rounded-full" style={{width: "36%"}}/>
            </div>
        </div>
    )
}