import React from 'react'
import Header from '../../Components/Header'
import css from "./Share.module.css"
import { Warning } from '@mui/icons-material'
import CircleAvator from '../../Components/CircleAvator'

const SHAREFAQ = ({ textWidget, isHide }) => {
  return (
    <div className={css.shareFAQ}>
      {isHide ? <Warning /> : null}
      <span>{textWidget}</span>
    </div>
  )
}

const Share = () => {
  return (
    <div className={css.container}>
      <Header title={'SHARE'} />
      <SHAREFAQ isHide={false} textWidget={'Hello hello can you hear me . as i scream your name'} />
      <SHAREFAQ isHide={true} textWidget={'Do not share your logins or 2FA codes'} />
      <h2>Share ID TRACKR with a fellow student</h2>
      <div className={css.shareArea}>
        <CircleAvator title={'Copy Link'} />
        <CircleAvator title={'WhatsApp'} onClick={() => {
          window.location.href = 'https://api.whatsapp.com/send?phone=0712540930';
        }} />
        <CircleAvator title={'Instagram'}
          onClick={() => {
            window.location.href = 'https://www.instagram.com/';
          }}
        />
        <CircleAvator title={'Telegram'} onClick={() => {
          window.location.href = 'https://telegram.org/';
        }} />
        <CircleAvator title={'Twitter'} onClick={() => {
          window.location.href = 'https://www.twitter.com/';
        }} />
        <CircleAvator title={'Snapchat'} onClick={() => {
          window.location.href = 'https://www.snapchat.com/';
        }} />
        <CircleAvator title={'Facebook'}
          onClick={() => {
            window.location.href = 'https://www.facebook.com/';
          }} />
        <CircleAvator title={'Email'} onClick={() => {
          window.location.href = 'https://www.gmail.com/';
        }} />
      </div>
    </div>
  )
}

export default Share
