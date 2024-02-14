import React from 'react'
import Header from '../../Components/Header'
import css from "./Bug.module.css"
import { Photo, PhotoCamera, PictureAsPdf } from '@mui/icons-material'

const Bug = () => {
  return (
    <div className={css.container}>
      <Header title={'BUG REPORT'} />
      <span>Found aproblem? Don't hesitate to reach us here!<span className={css.highlight}> Briefly state the problem you encountered and share any useful media if any</span> </span>
      <textarea name="" id="" cols="30" rows="10" placeholder='type here...'></textarea>
      <div className={css.attachments}>
        <span>Attachments(Optional)<br /> <span className={css.action}>Click to add an attachment</span></span>

        <div className={css.attachmentContainer}>
          <Photo /><PictureAsPdf /><PhotoCamera />
        </div>
        <span>We do not collect any other data than what is already provided on this platform<br />By clicking <b>Send</b> you consent to provide more information if needed through your email</span>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Bug
