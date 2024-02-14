import React, { useState } from 'react'
import css from "./FAQ.module.css"

const FAQ = ({ textWidget, isHelp, response }) => {
    const [isviewresponse, setisviewresponse] = useState(true);
    const toggleresponse = () => {
        setisviewresponse(!isviewresponse);
    }

    return (
        <div className={isHelp ? css.holderContainer : css.aboutContainer} onClick={toggleresponse}>
            {isviewresponse ? <span>{textWidget}</span> : <span>{response}</span>}

        </div>
    )
}

export default FAQ
