import { useEffect, useRef } from "react"
import PropTypes from 'prop-types'


const DiaLog = ({ children, open }) => {
    const dialogRef = useRef(null)
    // const toggle = () => {
    //     dialogRef.current.hasAttribute("open") ? dialogRef.current.close()
    //         : dialogRef.current.showModal()
    // }

    useEffect(() => {
        open ? dialogRef.current.showModal() : dialogRef.current.close()
    }, [open])

    return (
        <dialog className="select-none p-2 border border-black rounded-2xl backdrop-blur-3xl w-11/12 backdrop:backdrop-blur-md bg-transparent"
            ref={dialogRef}
            onClick={(e) => {
                const Dimensions = e.currentTarget.getBoundingClientRect()
                if (
                    e.clientX < Dimensions.left ||
                    e.clientX > Dimensions.right ||
                    e.clientY < Dimensions.top ||
                    e.clientY > Dimensions.bottom
                    // TODO ; how this is working 
                ) {
                    e.target.close()
                }
                // console.log(e.currentTarget.getBoundingClientRect())
                // console.log(`x: ${e.clientX} Y: ${e.clientY}`)
            }}
        >
            {children}
        </dialog>
    )
}
DiaLog.propTypes = {
    children: PropTypes.any,
    open: PropTypes.bool,
}

export default DiaLog