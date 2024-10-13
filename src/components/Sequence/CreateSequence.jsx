import { useState } from "react";
import Modal from "../ui/Modal"

const CreateSequence = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Modal Show={true} func={setShowModal} className="w-full h-4/6">

      </Modal>
      <button onClick={() => setShowModal(true)}>hello</button>
    </>
  )
}

export default CreateSequence