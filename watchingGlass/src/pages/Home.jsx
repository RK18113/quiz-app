import React from 'react'
import { Link } from 'react-router'
import monocle from "../assets/monocleEyeglass.svg"
import Button from '../components/Button'

function Home() {
    return (
        <div className='flex items-center justify-center min-h-screen w-full font-roboto'>
            <div className='flex items-center flex-wrap justify-center'>
                <img 
                    src={monocle} 
                    alt="monocle eyeglass" 
                    className='sm:w-[30%] w-[60%]'
                />
                
                <div className='text-center sm:w-[60%] w-full'>
                    <h1 className='text-5xl font-bold'>
                        <span className='block pb-5'>The</span>
                        <span className='block'>Watching Glass</span>
                    </h1>
                    <h3 className='text-3xl text-gray-600'>Your Path, Clearly Seen</h3>
                </div>

                <div className='flex justify-center w-full'>
                    <Link to="/questions">
                        <Button 
                            color="green" 
                            text="READ MY FUTURE!"
                        /> 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home