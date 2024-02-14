import React from 'react'
import css from "./Help.module.css"
import { Email, Phone } from '@mui/icons-material'
import CircleAvator from '../../Components/CircleAvator'
import FAQ from '../../Components/FAQ'
import Header from '../../Components/Header'



const Help = () => {
  return (
    <div className={css.container}>
      <Header title={'Help'} />
      <div className={css.middleSection}>
        <FAQ textWidget={'How to report my lost ID'} response={'Place response 1 here'} />
        <FAQ textWidget={'How to submit a lost ID'} response={'Place response 2 here'} />
        <FAQ textWidget={'How to know if my ID is found'} response={'Place response 3 here'} />
        <FAQ textWidget={'What to do if my ID is never recovered'} response={'Place response 4 here'} />
      </div>
      <div className={css.footerSection}>
        <h4>Contact Us</h4>
        <div className={css.CTA}>
          <CircleAvator title={'E-mail'} Icon={<Email />} onClick={() => {
            window.location.href = 'https://mail.google.com/';
          }} />
          <CircleAvator title={'Phone'} Icon={<Phone />} onClick={() => {
            window.location.href = 'tel:+25412540930';
          }} />
        </div>
      </div>
    </div>
  )
}

export default Help
