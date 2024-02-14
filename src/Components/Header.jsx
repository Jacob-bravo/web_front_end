import React from 'react'
import { ArrowBack } from '@mui/icons-material'
import css from "./Header.module.css"

const Header = ({ title }) => {
    return (
        <div className={css.header}>
            <ArrowBack />
            <h2>{title}</h2>
            <div></div>
        </div>
    )
}

export default Header
