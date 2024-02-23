import React from 'react'
import css from "./CircleAvator.module.css"

const CircleAvator = ({ title, Icon, onClick, isProfile,url }) => {
    return (
        <div className={css.Container} onClick={onClick}>
            {
                isProfile?<div className={css.profile}>
                    <img src={url} alt="pro" />
                </div>:
                <div className={css.circle}>{Icon}</div>
            }
            
            <div className={css.title}>{title}</div>
        </div>
    )
}

export default CircleAvator
