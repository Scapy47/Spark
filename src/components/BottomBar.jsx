import React from 'react'
import DevFlask from './DevFlask'

const BottomBar = () => {
    return (
        <>
            <nav className=' z-50 flex items-center justify-around w-full p-2'>
                <div className='p-4'>
                    <DevFlask size={"3em"} />
                </div>
                <div className='p-4'>
                    <DevFlask size={"3em"} />
                </div>
            </nav>
        </>
    )
}

export default BottomBar
