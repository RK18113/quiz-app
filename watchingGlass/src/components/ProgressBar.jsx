import React from 'react'

function ProgressBar({total = 0, completed = 0}) {
    const progressPercentage = `${(completed / total) * 100}%`;
    
    return (
        <div className="flex items-center gap-3">
            <div className="relative w-[78vw] sm:w-[150px] h-[15px] bg-gray-200 rounded-lg">
                <div 
                    className="absolute left-0 top-0 h-full bg-[#31CD63] rounded-lg transition-all duration-300 ease-in-out"
                    style={{ width: progressPercentage }}
                />
            </div>
            <span className='font-roboto text-[20px] text-gray-500'>
                {completed}/{total}
            </span>
        </div>
    )
}

export default ProgressBar