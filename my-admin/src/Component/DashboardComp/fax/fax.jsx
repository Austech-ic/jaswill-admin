import React from 'react'
import styles from './fax.module.css'
import {BiLink} from 'react-icons/bi'
import {AiOutlineImport,AiFillDiff} from 'react-icons/ai'
import { MdPublic,MdPublish,MdOutlineFax } from 'react-icons/md'
import {FaMailBulk,FaUsers,FaXbox} from 'react-icons/fa'
import {FiSend} from 'react-icons/fi'

const Fax = () => {
  const details = [
    {
      id:1,
      iconOne: <FaXbox className={styles.icons} />,
      label: "Receive Faxes",
      subLabel: "For as little as $9.99 per month, you can provision your own personal fax number. Use the number just like a traditional fax line, and you'll receive faxes by email.",
      button: <button className={styles.button}>Provision a Fax Number</button>
    },
    {
      id:2,
      iconOne: <FiSend className={styles.icons}/>,
      label: "Send Faxes",
      subLabel: "Sending faxes with DocHub is as easy as sending email. Send any document as a fax with our free or low-priced premium options. We'll even automatically craft a beautiful cover page for you.",
      button: <button className={styles.button}>View Sent Fax</button>
    },
  ]
  return (
    <div className={styles.maincont}>
    <div className={styles.homemain}>
    <div className={styles.homecont}>
      <MdOutlineFax className={styles.icon} />
    </div>
    </div>
   

    <div className={styles.textcont}>
     
      <p className={styles.textwo}>ModiDoc Fax Inbox</p>
      <p className={styles.textone}>The easiest way to send and receive faxes.</p>
    </div>
  
    <div className={styles.mapcont}>
      {
        details.map((datum) => (
          <div className={styles.map} key={datum.id} >
            <div className={styles.subcont}>
            <p>{datum.iconOne}</p>
            <p className={styles.head}>{datum.label}</p>
            </div>
            
            <p className={styles.text}>{datum.subLabel}</p>
            <p >{datum.button}</p>
          </div>
        ))
        
      }
    </div>
  

   
    
   

  </div>
  )
}

export default Fax