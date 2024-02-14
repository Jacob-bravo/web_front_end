import React from 'react'
import Header from '../../Components/Header'
import css from "./Share.module.css"
import FAQ from '../../Components/FAQ'
import { Warning } from '@mui/icons-material'
import CircleAvator from '../../Components/CircleAvator'

const SHAREFAQ = ({ textWidget, }) => {
  return (
    <div className={css.shareFAQ}>
      <Warning />
      <span>{textWidget}</span>
    </div>
  )
}

const Share = () => {
  return (
    <div className={css.container}>
      <Header title={'SHARE'} />
      <FAQ textWidget={'Note that students may only use this platform..........'} />
      <SHAREFAQ textWidget={'Do not share your logins or 2FA codes'} />
      <h2>Share ID TRACKR with a fellow student</h2>
      <div className={css.shareArea}>
        <CircleAvator title={'Copy Link'} />
        <CircleAvator title={'WhatsApp'} />
        <CircleAvator title={'Instagram'} />
        <CircleAvator title={'Telegram'} />
        <CircleAvator title={'Twitter'} />
        <CircleAvator title={'Snapchat'} />
        <CircleAvator title={'Facebook'} />
        <CircleAvator title={'Email'} />
      </div>
    </div>
  )
}

export default Share
