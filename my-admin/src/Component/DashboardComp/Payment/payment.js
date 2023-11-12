import React from 'react'
import styles from './payment.module.css'
import { HiHome,HiOutlineDocumentText,HiOutlineTemplate } from 'react-icons/hi'

const Payment = () => {
  
  return (
    <div className={styles.main}>
    <div className={styles.home}>
        <HiHome />
        <p>Dashboard / Payment</p>
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
   </div>
  )
}

export default Payment