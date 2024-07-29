import { useEffect, useRef } from "react"
import PropTypes from 'prop-types'


const DiaLog = ({ children, open }) => {
    const dialogRef = useRef(null)

    useEffect(() => {
        open ? dialogRef.current.showModal() : dialogRef.current.close()
    }, [open])

    return (
        <div>
            <dialog className="select-none p-2 border border-black rounded-2xl backdrop-blur-3xl w-11/12 backdrop:backdrop-blur-md bg-transparent"
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
                    }
                    // console.log(Dimensions)
                    // console.log("x" + e.clientX, "y" + e.clientY)
                }}>
                {children}
            </dialog>
        </div>  
    )
}
DiaLog.propTypes = {
    children: PropTypes.any,
    open: PropTypes.bool,
}

export default DiaLog