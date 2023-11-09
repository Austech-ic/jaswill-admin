import React from 'react'
import styles from './inbox.module.css'
import { HiHome,HiOutlineDocumentText } from 'react-icons/hi'
import {AiOutlineHome,AiOutlineInbox,AiFillFileAdd,AiFillSetting} from 'react-icons/ai'
import { MdCreate, MdOutlineCreateNewFolder,MdIncompleteCircle } from 'react-icons/md'


const Inbox = () => {
  return (
    <div className={styles.maincont}>
      <div className={styles.homemain}>
      <div className={styles.homecont}>
        <AiOutlineInbox className={styles.icon} />
      </div>
      </div>
     

      <div className={styles.textcont}>
       
        <p className={styles.textwo}>ModiDoc Inbox</p>
        <p className={styles.textone}>Your inbox contains documents that require your action in order to complete them.</p>
      </div>
      <div className={styles.maindivcont}>
        <div className={styles.divcont}>
        <div >
          <div className={styles.subcont}>
          <MdCreate className={styles.icons} />
         <p className={styles.head}>Sign Request</p>
          </div>
         
         <p className={styles.text}>When someone sends you a sign request, it appears here in your inbox.</p>
        </div>
        <div>
          <div className={styles.subcont}>
          <HiOutlineDocumentText className={styles.icons} />
         <p className={styles.head}>Form Fills</p>
          </div>
        
         <p className={styles.text}>A form fill is created in your inbox when you visit a template and click, Fill a Copy.</p>
        </div>
        </div>
        <div>
          <div className={styles.subcont} >
          <MdIncompleteCircle className={styles.icons} />
         <p className={styles.head}>Finalized Records</p>
          </div>
       
         <p className={styles.text}>Check back here to view completed and finalized sign requests. Easily access the audit trail history for each document, and download them to your computer for additional safekeeping.</p>
        </div>
      </div>



      <div className={styles.maindivcont}>
        <div className={styles.divcont}>
        <div >
          <div className={styles.subcont}>
          <MdCreate className={styles.icons} />
         <p className={styles.head}>Sign Request</p>
          </div>
         
         <p className={styles.text}>When someone sends you a sign request, it appears here in your inbox.</p>
        </div>
        <div>
          <div className={styles.subcont}>
          <HiOutlineDocumentText className={styles.icons} />
         <p className={styles.head}>Form Fills</p>
          </div>
        
         <p className={styles.text}>A form fill is created in your inbox when you visit a template and click, Fill a Copy.</p>
        </div>
        </div>
        <div>
          <div className={styles.subcont} >
          <MdIncompleteCircle className={styles.icons} />
         <p className={styles.head}>Finalized Records</p>
          </div>
       
         <p className={styles.text}>Check back here to view completed and finalized sign requests. Easily access the audit trail history for each document, and download them to your computer for additional safekeeping.</p>
        </div>
      </div>

     
      
     

    </div>
  )
}

export default Inbox