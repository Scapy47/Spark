import { useEffect, useRef } from "react"
import PropTypes from 'prop-types'
import frames from '../../assets/frames/frames.module.css'


const Modal = ({ children, Show, func, className }) => {
    const dialogRef = useRef(null)

    useEffect(() => {
        Show ? dialogRef.current.showModal() : dialogRef.current.close()
    }, [Show])

    return (
        <dialog className={`${className} ${frames.v1Cyan}`}
            ref={dialogRef}
            onClick={(e) => {
                // if there is a click on backdrop close dialog
                const Dimensions = e.currentTarget.getBoundingClientRect()
                if (
                    e.clientX < Dimensions.left ||
                    e.clientX > Dimensions.right ||
                    e.clientY < Dimensions.top ||
                    e.clientY > Dimensions.bottom
                ) {
                    e.target.close()
                    try {
                        func(false)
                    } catch { null }
                }
                // console.log(Dimensions)
                // console.log("x" + e.clientX, "y" + e.clientY)
            }}>
            {children}
        </dialog>
    )
}
Modal.propTypes = {
    children: PropTypes.any,
    Show: PropTypes.bool.isRequired,
    func: PropTypes.func,
    className: PropTypes.any,
}

export default Modal
