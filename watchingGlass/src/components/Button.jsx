import React from 'react'

function Button({ color, text, handleContinue }) {
    const buttonStyle = `
        ${color === "green" ? "bg-[#31CD63]" : "bg-gray-400"}
        sm:mb-0
        p-5
        text-white
        border-none
        rounded-md
        font-roboto
        text-[15px]
        w-[80vw]
        hover:scale-105
        transition 
        ease-in-out 
        delay-150
        cursor-pointer
        ${text === "OKAY" ? "sm:w-[400px]" : "sm:w-[300px]"}
    `;

    return (
       <button
          type="button"
          className={buttonStyle}
          onClick={handleContinue}
       >
          {text}
       </button>
    );
}

export default Button;
