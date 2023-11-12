import React from 'react'
import styles from './Staticblock.module.css'
import { HiHome,HiOutlineDocumentText,HiOutlineTemplate } from 'react-icons/hi'


const StaticBlock = () => {
 
  return (
    <div className={styles.main}>
        <div className={styles.home}>
            <HiHome />
            <p>Dashboard / StaticBlock</p>
          </div>
          <div>
            <button></button>
            <button></button>
            <button></button>
          </div>
       </div>
  )
}

export default StaticBlock