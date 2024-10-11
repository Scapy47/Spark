import { useEffect, useRef, useState } from 'react'
import Modal from '../components/Modal'
import CreateSequence from '../components/CreateSequence'

const Sequence = () => {
    const [time, setTime] = useState(0)     // time is stored in second
    const totolTime = useRef(0)
    const [showModal, setShowModal] = useState(false)
    const [play, setPlay] = useState(true)

    const study = [
        {
            name: "Scoping",
            time: {
                hour: 0,
                min: 1,
            },
            status: false
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            if (showModal && play) {
                setTime(pre => pre - 1)
            }
        }, 1000);

        if (time <= 0) {
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval)
        }
    }, [showModal, play, time])

    const timer = () => {
        let task
        study.forEach((e) => {
            if (e.status === false) {
                return task = e
            }
        })
        if (!time) {
            setTime((task.time.min + task.time.hour * 60) * 60)
            totolTime.current = (task.time.min + task.time.hour * 60) * 60
        }
        setShowModal(true)
    }

    const percentage = Math.round(time / totolTime.current * 100)

    return (
        <section className=''>
            <Modal className="w-fit h-fit" Show={showModal} func={setShowModal}>
                <div className="grid place-items-center">
                    <div id='redial_progress' className='rounded-full min-w-60 max-w-72 min-h-60 max-h-72 grid place-items-center m-6'
                        style={{ background: `conic-gradient(yellow ${percentage}%, 0, transparent)` }}>
                        <div className="rounded-full w-5/6 h-5/6 grid place-items-center bg-blue-950">
                            <div className='flex flex-col place-items-center'>
                                <span className='font-bold text-6xl flex items-center font-Orbitron'>{percentage}<span className="font-thin">%</span></span>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => play ? setPlay(false) : setPlay(true)}>STOP</button>
                </div>
            </Modal>
            {
                study.map((e) => {
                    return (
                        <div key={e.name} className=''>
                            <div>
                                <span className='block'>{e.name}</span>
                                {
                                    e.time.hours === 0 ?
                                        <span className='block'>
                                            {e.time.min} minutes
                                        </span> :
                                        <span className='block'>
                                            {e.time.hour} hour and {e.time.min} minutes
                                        </span>
                                }
                            </div>
                            {/* icon for showing if its done or not */}
                        </div>
                    )
                })
            }
            <button className='' onClick={timer}>start</button>
            <CreateSequence />
        </section>
    )
}
export default Sequence
