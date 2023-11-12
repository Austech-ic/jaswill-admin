import React from 'react'
import styles from './account.module.css'
import { HiHome,HiOutlineDocumentText,HiOutlineTemplate } from 'react-icons/hi'

const Account = () => {
  
  return (
    <div className={styles.main}>
    <div className={styles.home}>
        <HiHome />
        <p>Dashboard / Account</p>
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
   </div>
  )
}

export default Account