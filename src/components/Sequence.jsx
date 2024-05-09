import React from 'react'

const Sequence = () => {
    const study = [
        ["Scoping", 5],
        ["Maybe mapping", 10],
        ["Evaluating by reading or learning", 30],
        ["questions", 1],
        ["active rest", 15]
    ]



    return (
        <>
            {
                study.map((arr, index) => {
                    return (
                        <div className='flex justify-between w-full p-2' key={index}>
                            <p className='font-poppins text-xl'>{arr[0]}</p>
                            <p className='text-lg'>{arr[1]}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Sequence
