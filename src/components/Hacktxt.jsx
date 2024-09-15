import PropTypes from 'prop-types'
import { useRef, useState } from 'react';

const Hacktxt = ({ children ,className }) => {
    const chars = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
    const inTXT = useRef(children)
    const [txt, setTxt] = useState(inTXT)

    function animate() {
        
    }

    return (
        <>
        <p onMouseEnter={animate} className={className}>{txt}</p>
        </>
    )
}

Hacktxt.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
}

export default Hacktxt 