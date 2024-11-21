import { useState } from "react";
import Modal from "@/components/ui/Modal";

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
          <div className="border-2 my-4 border-primary rounded-lg p-2 grid grid-rows-4 grid-cols-[75%,25%]">
            <label htmlFor="task" className="block mb-12 m-2 row-start-1 col-start-1">Task name</label>
            <input type="text" id="task" className="input input-bordered bg-transparent input-secondary row-start-1 col-start-1 self-end" />
            <input type="number" max={90} min={5} id="time-selector" className="p-3 ml-1 bg-transparent border-accent border-2 rounded-xl row-start-1 col-star-2 self-end h-12" />
            <button className="btn btn-primary w-full row-start-4 col-span-2">add</button>
          </div>
        </div>
      </Modal>
      <button className="btn btn-outline btn-accent" onClick={() => setShowModal(true)}>hello</button>
    </>
  )
}

export default CreateSequence