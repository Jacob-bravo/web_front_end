import React from 'react'
import css from "./CircleAvator.module.css"

const CircleAvator = ({ title, Icon, onClick }) => {
    return (
        <div className={css.Container} onClick={onClick}>
            <div className={css.circle}>{Icon}</div>
            <div className={css.title}>{title}</div>
        </div>
    )
}

export default CircleAvator
