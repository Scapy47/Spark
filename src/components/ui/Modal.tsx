import { ReactNode, useEffect, useRef } from "react"

interface props {
    children: ReactNode,
    Show: boolean,
    func?: () => void,
    className: string
}

const Modal = ({ children, Show, func, className }: props) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (Show) {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [Show])

    return (
        <dialog className={className}
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
                    const target = e.target as HTMLDialogElement
                    target.close()
                    func?.()
                }
            }}>
            {children}
        </dialog>
    )
}


export default Modal
