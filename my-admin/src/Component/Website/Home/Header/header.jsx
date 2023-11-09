import React from 'react'
import Link from 'next/link'
import styles from './header.module.css'
import Navbar from '@/Component/Website/Navigation/Navbar/page'
import { GrDocumentText } from 'react-icons/gr';
import { IoMdDocument } from 'react-icons/io';


const header = () => {
  return (
    <div className={styles.maincont}>
      <Navbar />

      <div className={styles.subheader}>

        <div className={styles.subheadone}>
        <h1 className={styles.textone}>Edit, send & sign PDF</h1>
       <h1 className={styles.textone}>documents online for free.</h1>
       <h4 className={styles.textwo}>Document workflow, simplified.</h4>
        </div>
       
      
       <div className={styles.subheadtwo}>

          
          <p className={styles.buttonthree}>
          <Link href={`/login`} className={styles.loglink}>
            
          Log in to your ModiDoc
         </Link>
            </p>
          <button className={styles.buttonone}>
          <Link href={`/signup`} className={styles.loglinks}>
          Create free account
            </Link>
            </button>
        </div>

      </div>
        
        <div className={styles.whitmaincont}>
        <div className={styles.whitecont}>
          <div className={styles.iconcont}>
          <GrDocumentText className={styles.icon}/>
          </div>
          
        
          <p className={styles.drag}>Drag and drop document here to upload</p>
          <button className={styles.buttontwo}>Select a document</button>
          <p className={styles.small}>Upload documents of up to 31 MB in PDF, DOC, DOCX, RTF, PPT, PPTX, JPEG, PNG, or TXT</p>

        </div>

        </div>
     
    </div>
  )
}

export default header