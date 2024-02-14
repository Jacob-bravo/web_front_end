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
        <FAQ textWidget={'How to report my lost ID'} />
        <FAQ textWidget={'How to submit a lost ID'} />
        <FAQ textWidget={'How to know if my ID is found'} />
        <FAQ textWidget={'What to do if my ID is never recovered'} />
      </div>
      <div className={css.footerSection}>
        <h4>Contact Us</h4>
        <div className={css.CTA}>
          <CircleAvator title={'E-mail'} Icon={<Email />} />
          <CircleAvator title={'Phone'} Icon={<Phone />} />
        </div>
      </div>
    </div>
  )
}

export default Help
