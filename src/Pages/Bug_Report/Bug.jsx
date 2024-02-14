import { useState } from 'react'
import React from 'react'
import Header from '../../Components/Header'
import css from "./Bug.module.css"
import { Photo, PhotoCamera, PictureAsPdf } from '@mui/icons-material'

const Bug = () => {
  const [file, setFile] = useState(null);
  const handleFileSelect = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setFile(file);
  };
  return (
    <div className={css.container}>
      <Header title={'BUG REPORT'} />
      <div className={css.sections}>
        <span>Found a problem? Don't hesitate to reach us here!<span className={css.highlight}> Briefly state the problem you encountered and share any useful media if any</span> </span>
        <textarea name="" id="" cols="30" rows="10" placeholder='type here...'></textarea>
        <div className={css.attachments}>
          <span>Attachments(Optional)<br /> <span className={css.action}>Click to add an attachment</span></span>

          <div className={css.attachmentContainer} onClick={() => document.getElementById("fileInput").click()}>
            <input type="file" id="fileInput"
              onChange={handleFileSelect}
              style={{ display: "none" }} />
            {file && (
              <span>
                {file.name} ({file.type})
              </span>
            )}
            <div className={file!==null?css.hiddenIcons:css.icons}>
              <Photo /><PictureAsPdf /><PhotoCamera />
            </div>

          </div>
          <span>We do not collect any other data than what is already provided on this platform<br />By clicking <b className={css.bugCTA}>Send</b> you consent to provide more information if needed through your email</span>
          <button>Send</button>
        </div>
      </div>

    </div>
  )
}

export default Bug
