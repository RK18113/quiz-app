import React from 'react'
import { Link } from 'react-router'
import ExitButton from '../assets/exitButton.svg' 

function NavBar({title}) {
  return (
    <div className='flex w-full h-full justify-center'>
        <div className='flex h-[80px] w-full items-center pr-6'>
          <div className='flex justify-center items-center w-full'>
            { title ? <h2 className='font-roboto pl-6'>Fortune Quiz</h2> : <h2 className='mt-10'></h2>}
          </div>
          <Link to="/">
              <img src={ExitButton} className='w-[35px] h-[35px] hover:scale-110' />
          </Link>
        </div>
    </div>
  )
}

export default NavBar
