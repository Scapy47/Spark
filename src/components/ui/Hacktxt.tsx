/*
    TODO : add comments how it is working 
*/

import { useEffect, useRef, useState } from 'react';

const Hacktxt = ({ children = "ERROR", className }: { className: String, children: string }) => {
    const inTXT = useRef(children);
    const [txt, setTxt] = useState(children);

    useEffect(() => {
        animate()
    })

    const randomChar = () => {
        const chars = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
        return chars[Math.round(Math.random() * chars.length)];
    }

    const runCount = useRef(0)
    function animate() {

        const intervalID = setInterval(() => {

            setTxt(inTXT.current.split("").map((e, index) => {
                if (index < runCount.current) return e
                return randomChar()
            }).join(""))

            if (runCount.current >= inTXT.current.length) {
                runCount.current = 0
                clearInterval(intervalID)
            }
            runCount.current += 1 / 3
        }, 30)
    }


    return <p onMouseOver={animate} className={`uppercase ${className}`}>{txt}</p>
}

export default Hacktxt;
