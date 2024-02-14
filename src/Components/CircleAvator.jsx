import React from 'react'
import css from "./CircleAvator.module.css"

const CircleAvator = ({ title, Icon }) => {
    return (
        <div className={css.Container}>
            <div className={css.circle}>{Icon}</div>
            <div className={css.title}>{title}</div>
        </div>
    )
}

export default CircleAvator
