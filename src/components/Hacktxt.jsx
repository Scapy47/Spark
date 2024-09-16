import { useReducer, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Hacktxt = ({ children = "ERROR", className }) => {
    const inTXT = useRef(children);
    const [txt, setTxt] = useState(children);

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
            console.log(runCount.current)
        }, 30)
    }


    return <p onMouseOver={animate} className={className}>{txt}</p>
}

Hacktxt.propTypes = {
    children: PropTypes.string,
    className: PropTypes.any,
}
export default Hacktxt;