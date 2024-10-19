import { useEffect, useRef } from "react"
import frames from '../../assets/frames/frames.module.css'


interface Props {
    children: any,
    Show: boolean,
    func: Function | null,
    className: any,
}


const Modal = ({ children, Show, func, className }: Props) => {
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
                    if (func !== null) {
                        func()
                    }
                }
                // console.log(Dimensions)
                // console.log("x" + e.clientX, "y" + e.clientY)
            }}>
            {children}
        </dialog>
    )
}


export default Modal
