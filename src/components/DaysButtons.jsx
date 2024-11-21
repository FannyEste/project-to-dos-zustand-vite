import React from "react";

const DaysButtons = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
        <div className="flex gap-2">
            {days.map((day) => (
                <button
                key={day}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                >
                {day}
                </button>
            ))}
        </div>
    );
};