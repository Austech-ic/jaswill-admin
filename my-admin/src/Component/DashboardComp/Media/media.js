import React, { useState } from 'react';
import {FaUpload} from 'react-icons/fa'
import { HiHome,HiOutlineDocumentText,HiOutlineTemplate } from 'react-icons/hi'
import styles from './media.module.css'



const Media = () => {

    return(
        <div className={styles.main}>
        <div className={styles.home}>
            <HiHome />
            <p>Dashboard / Media</p>
          </div>
          <div>
            <button></button>
            <button></button>
            <button></button>
          </div>
       </div>
    )
}


export default Media;