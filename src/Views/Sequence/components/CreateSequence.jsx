import { useState } from "react";
import Modal from "@/components/ui/Modal"

const CreateSequence = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Modal Show={showModal} func={setShowModal} className="w-full h-full">
        <header className="mt-4">
          <span className="text-2xl font-Orbitron text-primary">Create sequence</span>
        </header>
        <div>
          <label htmlFor="seqName" className="label text-secondary font-Orbitron font-extrabold">name</label>
          <input type="text" name="name" id="seqName" required className="input input-bordered bg-transparent input-primary w-full" />
          <div className="border-2 my-4 border-primary rounded-lg p-2">
            <label htmlFor="task" className="block m-2 label">Task name</label>
            <input type="text" id="task" className="input input-bordered bg-transparent input-secondary w-4/6" />
            <input type="time" id="time-selector" className="p-3 bg-transparent border-accent border-2 rounded-xl w-2/6 " />
            <button className="btn btn-primary w-full">add</button>
          </div>
        </div>
      </Modal>
      <button className="btn btn-outline btn-accent" onClick={() => setShowModal(true)}>hello</button>
    </>
  )
}

export default CreateSequence