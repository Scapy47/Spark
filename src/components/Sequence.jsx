import { useRef, useState } from 'react'
import Modal from './Modal'
import countdown from '../js/countdown.js'
// import tick from "../assets/icons/tick.svg";

const Sequence = () => {
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    const CDown = useRef(new countdown())
    const [showModal, setShowModal] = useState(false)

    const study = [
        {
            task: "Scoping",
            time: {
                hours: 0,
                minutes: 5
            },
            done: true
        }
    ]

    const timer = () => {
        setShowModal(true)
        console.log("timerStartsnow");

        if (sec >= 59) {
            setSec(0)
            setMin(prev => prev + 1)
        }
    }
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
        <section className=''>
            <Modal className="bg-white"
                open={showModal}
                func={setShowModal}
                Styles="w-11/12 h-5/6"
            >
                <h1>
                    <p>sec {sec}</p>
                    <p>min {min}</p>
                </h1>
            </Modal>
            {
                study.map((e) => {
                    return (
                        <div key={e.task} className='flex items-center justify-between px-3'>
                            <div>
                                <p className='text-2xl font-'>{e.task}</p>
                                {
                                    e.time.hours === 0 ?
                                        <p className='font-extralight'>
                                            {e.time.minutes} minutes
                                        </p>
                                        : <p className='font-extralight'>
                                            {e.time.hours} hour and {e.time.minutes} minutes
                                        </p>
                                }
                            </div>
                            {/* icon for showing if its done or not */}
                        </div>
                    )
                })
            }
            <button
                className='absolute bottom-0 border-cyan-200 shadow-cyan-100 border-2 shadow-md '
                onClick={timer}
            >start</button>
        </section>
    )
}
export default Sequence