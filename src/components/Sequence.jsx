import { useState } from 'react'
import DiaLog from './DiaLog'
// import tick from "../assets/icons/tick.svg";

const Sequence = () => {
    // const [timer, setTimer] = useState(0)
    const [showModal, setShowModal] = useState(false)

    const study = [
        // ["Scoping", 5, true],
        // ["Maybe mapping", 10, false],
        // ["Evaluating by reading or learning", 30, true],
        // ["questions", 1],
        // ["active rest", 15, false],
        {
            task: "Scoping",
            time: {
                hours: 0,
                minutes: 5
            },
            done: true
        }
    ]

    // code for component that is going to create sequence
    // time shoude be a object with hour and minutes
    // class Sequence {
    //     constructor(task, time, done) {
    //         this.task = task
    //         this.time = time
    //         this.done = done
    //     }
    // }

    return (
        <>
            <DiaLog className=""
                open={showModal}>
                <h1></h1>
            </DiaLog>
            {
                study.map((e) => {
                    return (
                        <div key={e.task} className='flex items-center justify-between px-3'>
                            <div>
                                <p className='text-2xl font-'>{e.task}</p>
                                {
                                    e.time.hours === 0 ?
                                        <p className='font-extralight'>{e.time.minutes} minutes</p>
                                        : <p className='font-extralight'>{e.time.hours} hour and {e.time.minutes} minutes</p>
                                }
                            </div>
                            <img className='' src="" alt={e.done && "Done"} />
                        </div>
                    )
                })
            }
        </>
    )
}
export default Sequence