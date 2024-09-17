import { useEffect, useState } from 'react'
import Modal from './Modal'

const Sequence = () => {
    const [time, setTime] = useState(0)
    const [play, setPlay] = useState(true)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (showModal && play) {
                setTime(pre => pre - 1)
            }
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [showModal, play])



    const study = [
        {
            name: "Scoping",
            time: {
                hour: 1,
                min: 30,
            },
            status: false
        }
    ]



    const timer = () => {

        let task
        study.forEach((e) => {
            if (e.status === false) {
                return task = e
            }
        })
        if (!time) {
            setTime((task.time.min + task.time.hour * 60) * 60)
        }
        setShowModal(true)
    }

    return (
        <section className=''>
            <Modal className="w-11/12 h-5/6" open={showModal} func={setShowModal}>
                <h1>{Math.round(time / 60)}</h1>
                <button onClick={() => setPlay(false)}>STOP</button>
            </Modal>
            {
                study.map((e) => {
                    return (
                        <div key={e.name} className=''>
                            <div>
                                <p className=''>{e.name}</p>
                                {
                                    e.time.hours === 0 ?
                                        <p className=''>
                                            {e.time.min} minutes
                                        </p>
                                        : <p className=''>
                                            {e.time.hour} hour and {e.time.min} minutes
                                        </p>
                                }
                            </div>
                            {/* icon for showing if its done or not */}
                        </div>
                    )
                })
            }
            <button
                className=''
                onClick={timer}
            >start</button>
        </section>
    )
}
export default Sequence