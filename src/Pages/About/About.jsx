import React from 'react';
import Header from '../../Components/Header';
import CircleAvator from '../../Components/CircleAvator';
import FAQ from '../../Components/FAQ';
import css from "./About.module.css"

const About = () => {
  return (
    <div className={css.container}>
      <Header title={'ABOUT'}/>
      <FAQ textWidget={'In the bustling halls of Jomo Kennyatta University of Agriculture and Technology......'} />
      <h2>TEAM</h2>
      <div className={css.team}>
        <CircleAvator title={'Michael O.'}/>
        <CircleAvator title={'Glorious W.'}/>
        <CircleAvator title={'Hawkins L.'}/>
        <CircleAvator title={'Anastacia N.'}/>
        <CircleAvator title={'Cynthia M.'}/>
        <CircleAvator title={'Helen W.'}/>
      </div>

      <h2>SUPPORT US</h2>
    <div className={css.FooterArea}>
    <CircleAvator title={'SHARE'}/>
      <CircleAvator title={'PAYPAL'}/>
    </div>
    </div>
  )
}

export default About
