import React from 'react'
import styles from './testimonial.module.css'
import { HiHome,HiOutlineDocumentText,HiOutlineTemplate } from 'react-icons/hi'

const Testimonial = () => {
 
  return (
    <div className={styles.main}>
    <div className={styles.home}>
        <HiHome />
        <p>Dashboard / Testimonial</p>
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
   </div>
  )
}

export default Testimonial