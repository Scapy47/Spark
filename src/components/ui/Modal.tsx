import { ReactNode, useEffect, useRef } from "react"
import frames from '../../assets/frames/frames.module.css'

interface props {
    children: ReactNode,
    Show: boolean,
    func: Function,
    className: string
}

const Modal = ({ children, Show, func, className }: props) => {
    const dialogRef = useRef(null)

    useEffect(() => {
        Show ? dialogRef?.current?.showModal() : dialogRef?.current?.close()
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
