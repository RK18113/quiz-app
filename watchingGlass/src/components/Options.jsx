import React from 'react'
import Tick from "../assets/tick.svg"

function Options({ optionSelected, currentOption, element, handleOptionSelection}) {
  return (
    <div className='w-full flex justify-center font-roboto text-[#191D63]'>
        <div 
            className={`
                    flex
                    justify-start
                    items-center
                    sm:w-[400px]
                    w-[80vw]
                    p-4
                    pl-5
                    rounded-md
                    border-2
                    cursor-pointer 
                    ${optionSelected === currentOption ? 
                      "bg-[#31CD63] border-[#31CD63]" : 
                      "bg-white border-transparent"
                    }
                    transition-all
                    duration-150
                    ease-in
                    hover:scale-105
                    `
            } 
            onClick={() => handleOptionSelection(currentOption)}>
          {optionSelected === currentOption ? 
            <img src={Tick} alt="" className='w-[45px] h-[45px]'/> : 
            <span className='bg-[#EDE8E3] rounded-full w-[45px] h-[45px] flex justify-center items-center font-bold text-[20px]'>{currentOption}</span>
          }
          <span className='ml-5 font-roboto font-semibold text-[20px]'>{element}</span>
        </div>
    </div>
  )
}

export default Options