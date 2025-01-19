import React from 'react'

function Button({ color, text, handleContinue }) {
    const buttonStyle = `
        ${color === "green" ? "bg-[#31CD63]" : "bg-gray-400"}
        sm:mb-0
        p-5
        px-20
        px-10
        text-white
        border-none
        rounded-md
        font-roboto
        text-[15px]
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
