import React from 'react'
import css from "./FAQ.module.css"

const FAQ = ({textWidget,isHelp}) => {
    return (
        <div className={isHelp?css.holderContainer:css.aboutContainer}>
            <span>{textWidget}</span>
        </div>
    )
}

export default FAQ
