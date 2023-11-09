import React from 'react'
import styles from './document.module.css'
import {BiMessageSquareCheck,BiShareAlt} from 'react-icons/bi'
import { HiHome,HiOutlineDocumentText,HiOutlineTemplate } from 'react-icons/hi'
import {AiOutlineImport} from 'react-icons/ai'
import { MdCreate, MdOutlineCreateNewFolder,MdIncompleteCircle } from 'react-icons/md'
import {TbSquareCheckFilled} from 'react-icons/tb'

const page = () => {
  const details = [
    {
      id:1,
      iconOne: <AiOutlineImport className={styles.icons} />,
      label: "Get Documents Signed",
      subLabel: "Easily place signature, initial, and date fields on any document. Send to a third party to review, complete, and sign, creating a legally binding agreement between two parties."
    },
    {
      id:2,
      iconOne: <MdCreate className={styles.icons}/>,
      label: "Edit, Annotate, Form Fill",
      subLabel: "Simplify the document signing and annotation process by creating and filling forms. You can even rotate pages and merge files together."
    },
    {
      id:3,
      iconOne: <HiOutlineTemplate className={styles.icons}/>,
      label: "Legally Binding eSignatures",
      subLabel: "DocHub's world-class eSignature features let you create legally binding, handwritten signatures using your smartphone."
    },
    {
      id:4,
      iconOne: <BiShareAlt className={styles.icons}/>,
      label: "Share, Send, Receive",
      subLabel: "Sign and send documents without printing or scanning. Share files with a click of a button to collaborate in real time."
    }
  ]
  return (
    <div className={styles.maincont}>
    <div className={styles.homemain}>
    <div className={styles.homecont}>
      <HiOutlineDocumentText className={styles.icon} />
    </div>
    </div>
   

    <div className={styles.textcont}>
     
      <p className={styles.textwo}>ModiDoc Documents</p>
      <p className={styles.textone}>Annotate, edit, sign and share any document.</p>
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
          </div>
        ))
        
      }
    </div>
  

   
    
   

  </div>
  )
}

export default page