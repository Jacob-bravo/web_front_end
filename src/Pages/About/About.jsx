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
        <CircleAvator title={'Michael O.'} isProfile={true} url={'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D'}/>
        <CircleAvator title={'Glorious W.'}/>
        <CircleAvator title={'Hawkins L.'}/>
        <CircleAvator title={'Anastacia N.'}/>
        <CircleAvator title={'Cynthia M.'} isProfile={true} url={'https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXJ8ZW58MHx8MHx8fDA%3D'}/>
        <CircleAvator title={'Helen W.'}/>
      </div>

      <h2>SUPPORT US</h2>
    <div className={css.FooterArea}>
    <CircleAvator title={'SHARE'} onClick={()=>{
       window.location.href = 'https://api.whatsapp.com/send?phone=0712540930';
    }}/>
      <CircleAvator title={'PAYPAL'} onClick={()=>{
          window.location.href = 'https://www.paypal.com';
      }}/>
    </div>
    </div>
  )
}

export default About
