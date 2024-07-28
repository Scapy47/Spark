import { useState } from 'react'
import DiaLog from './DiaLog'

const Sequence = () => {
    const [timer, setTimer] = useState(0)

    const study = [
        ["Scoping", 5],
        ["Maybe mapping", 10],
        ["Evaluating by reading or learning", 30],
        ["questions", 1],
        ["active rest", 15]
    ]


    return (
        <>
            <DiaLog open={true}>
                <h1>hello</h1>
            </DiaLog>
            {
                study.map((e) => {
                    return (
                        <div key={e[0]} className='flex items-center justify-between bg-red-50'>
                            <p className='ml-2'>{e[0]}</p>
                            <button className='mr-4 my-2 bg-zinc-200 size-16 rounded-full'
                                onClick={() => {
                                    // TODO : a function that shows a timer in dialog and starts a countdown
                                    e[1]
                                }}
                            >{e[1]}</button>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Sequence