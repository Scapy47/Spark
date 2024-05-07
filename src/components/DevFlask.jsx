import { React, useState } from 'react'
import { IoFlask } from 'react-icons/io5'

const DevFlask = ({ size }) => {
    const Col = [
        "aliceblue",
        "aquamarine",
        "beige",
        "blanchedalmond",
        "cornsilk",
        "gainsboro",
        "honeydew",
        "ivory",
        "lavender",
        "lavenderblush",
        "lightblue",
        "lightcoral",
        "lightcyan",
        "lightgoldenrodyellow",
        "lightgreen",
        "lightpink",
        "lightsalmon",
        "lightskyblue",
        "lightseagreen",
        "lightsteelblue",
        "lightyellow",
        "mintcream",
        "mistyrose",
        "moccasin",
        "oldlace",
        "papayawhip",
        "peachpuff",
        "seashell",
        "snow",
        "thistle",
        "wheat",
    ];


    const [color, setColor] = useState("")
    return (
        <div>
            <IoFlask onClick= {
                () => setColor(Col[Math.round(Math.random() * 31)])
            }
                size={size} color={color} />
        </div>

    )
}

export default DevFlask
