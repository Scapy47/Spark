import React from 'react'
import { IoCodeWorking } from 'react-icons/io5'

const TopBar = () => {

    return (
        <>
            <header className='flex sticky top-0 justify-between items-center w-full z-50 p-4'>
                <p className="text-3xl font-Orbitron">hello world</p>
                <nav className='flex justify-center items-center'>
                    <IoCodeWorking size={"3em"}/>
                </nav>
            </header>
        </>
    )
}

export default TopBar
