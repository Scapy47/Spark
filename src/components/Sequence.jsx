import { useState } from 'react'
import Modal from './Modal'

const Sequence = () => {
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    // TODO change into one useState for displaying time
    const [showModal, setShowModal] = useState(false)

    const study = [
        {
            name: "Scoping",
            time: {
                hours: 0,
                minutes: 5
            },
            status: false
        }
    ]

    const timer = () => {
        let task
        study.forEach(e => {
            if (e.status === false) {
                return task = e
            }
        })
        setMin(task.time.minutes)
        setShowModal(true)
        // TODO use useEffect to run the timer
    }

    return (
        <section className=''>
            <Modal className="w-11/12 h-5/6"
                open={showModal}
                func={setShowModal}
            >
                <h1>
                    <p>sec {sec}</p>
                    <p>min {min}</p>
                </h1>
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
                                            {e.time.minutes} minutes
                                        </p>
                                        : <p className=''>
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
                className=''
                onClick={timer}
            >start</button>
        </section>
    )
}
export default Sequence