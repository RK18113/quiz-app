import React from 'react'
import Present from '../assets/present.svg'
import Button from '../components/Button'
import NavBar from '../components/NavBar'

function Result() {
  return (
    <>
      <NavBar title={false} />
      {/* Main content container with min-height to prevent shifting */}
      <div className="flex min-h-[calc(100vh-180px)] justify-center items-center font-roboto md:text-[25px] text-[20px] font-bold text-[#191D63]">
        <div className="flex items-center mt-10 sm:mt-0 w-[90%] lg:w-[800px] flex-col md:flex-row m-0 p-0 mb-[100px]"> 
          <div>
            <img src={Present} alt="Gift Box" className="mb-4 w-28 md:w-48 m-0 p-0" /> 
            <p className='p-0 m-0 text-center'>Results</p>
          </div>

          <div className="flex flex-wrap md:pl-10 text-center leading-7 w-[95%]">
            <p className="text-center"> 
              You are blah blah blah and you do blah blah, you wish you could blah blah. 
            </p>
            <p className='text-center'>
              Do blah blah and everything will be amazing and beautiful and perfect and pay me 
              $12031231 for doing this service for you, and I'll give you 3 more predictions.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around w-full md:bg-white h-[100px] fixed bottom-0">
        <Button
          color="green"
          text="OKAY"
        />
      </div>
    </>
  )
}

export default Result