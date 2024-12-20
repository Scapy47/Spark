import { useEffect, useRef, useState } from 'react'
import Modal from '@/components/ui/Modal'
import CreateSequence from './components/CreateSequence'
import * as d3 from "d3"

const Sequence = () => {
    const [time, setTime] = useState(0)
    const totolTime = useRef(0)
    const [showModal, setShowModal] = useState(false)
    const [play, setPlay] = useState(true)

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

    // dummy data
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

    // create a timer for every obj in array that has status of false
    const timer = () => {
        study.forEach((e) => {
            if (e.status === false) {
                if (!time) {
                    // time in seconds for accuracy 
                    setTime((e.time.min + e.time.hour * 60) * 60)
                    totolTime.current = (e.time.min + e.time.hour * 60) * 60
                }
                return
            }
        })
        setShowModal(true)
    }

    const percentage = Math.round(time / totolTime.current * 100)


    class createMap {
        x: string | number
        y: string | number
        simulation: any

        constructor(dimension = ["100vh", "100vw"]) {
            this.x = dimension[0]
            this.y = dimension[1]
            this.simulation
        }
    }


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
            {/* {
                study.map((e) => {
                    return (
                        <div key={e.name} className=''>
                            <div className=''>
                                <span className='text-xl'>{e.name.charAt(0).toUpperCase() + e.name.slice(1)}</span>
                            </div>
                        </div>
                    )
                })
            } */}
            <div>
            </div>
            <button className='' onClick={timer}>start</button>
            <CreateSequence />
        </section>
    )
}
export default Sequence
