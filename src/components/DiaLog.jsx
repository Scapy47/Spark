import { useEffect, useRef } from "react"
import PropTypes from 'prop-types'


const DiaLog = ({ children, open }) => {
    const dialogRef = useRef(null)
    const toggle = () => {
        dialogRef.current.hasAttribute("open") ? dialogRef.current.close()
            : dialogRef.current.showModal()
    }

    useEffect(() => {
        open ? dialogRef.current.showModal() : dialogRef.current.close()
    }, [open])

    return (
        <dialog className="rounded-xl p-2 select-none w-11/12 backdrop:bg-black backdrop:opacity-45"
            ref={dialogRef}
            onClick={(e) => e.currentTarget === e.target && toggle()}
        >
            <div>
                {children}
            </div>
        </dialog>
    )
}
DiaLog.propTypes = {
    children: PropTypes.any,
    open: PropTypes.bool,
}

export default DiaLog