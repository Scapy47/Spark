import { useState } from "react";
import Modal from "../ui/Modal"

const CreateSequence = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Modal Show={showModal} func={setShowModal} className="w-full h-4/6">
        <header className="mt-4">
          <span className="text-2xl font-Orbitron text-primary">Create sequence</span>
        </header>
        <div>
          <label htmlFor="seqName" className="block m-2 text-secondary font-ob font-medium text-xl">name</label>
          <input type="text" name="name" id="seqName" required className="input input-bordered bg-transparent input-primary w-full" />
        </div>
      </Modal>
      <button className="btn btn-outline btn-accent" onClick={() => setShowModal(true)}>hello</button>
    </>
  )
}

export default CreateSequence
