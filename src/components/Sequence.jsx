import React, { useRef, useState } from 'react'

const Sequence = () => {
    const study = [
        ["Scoping", 5],
        ["Maybe mapping", 10],
        ["Evaluating by reading or learning", 30],
        ["questions", 1],
        ["active rest", 15]
    ]

    // const [timer, setTimer] = useState(0)
    // const Timer = (arr) => {
    //     const timerTime = useRef(arr[1])
    //     const Min = useRef(new Date().getMinutes())
    //     setInterval(() => {
    //         const currentTime = new Date().getMinutes()
    //         setTimer((Min.current + timerTime.current) - currentTime)
    //     }, 1000)
    // }
    // Timer(study[0])

    const [timer, setTimer] = useState(0)
    const Timer = (arr) => {

    }
    Timer(study[0])

    return (
        <>

            <p className='text-9xl'>{timer}</p>
            {
                // study.map((arr, index) => {
                //     return (
                //         <div className='flex justify-between w-full p-2' key={index}>
                //             <p className='font-poppins text-xl'>{arr[0]}</p>
                //             <p className='text-lg'>{arr[1]}</p>
                //         </div>
                //     )
                // })
            }
        </>
    )
}

export default Sequence
