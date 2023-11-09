import React from 'react'
import styles from './sent.module.css'
import {BiMessageSquareCheck} from 'react-icons/bi'
import { HiHome,HiOutlineDocumentText,HiOutlineTemplate } from 'react-icons/hi'
import {AiOutlineHome,AiOutlineInbox,AiFillFileAdd,AiFillSetting,AiOutlineClockCircle} from 'react-icons/ai'
import { MdCreate, MdOutlineCreateNewFolder,MdIncompleteCircle } from 'react-icons/md'
import {TbSquareCheckFilled} from 'react-icons/tb'

const Sent = () => {
  const details = [
    {
      id:1,    
      iconOne: <MdCreate className={styles.icons} />,
      label: "Get Documents Signed",
      subLabel: "Easily place signature, initial, and date fields on any document. Send to a third party to review, complete, and sign, creating a legally binding agreement between two parties."
    },
    {
      id:2,
      iconOne: <TbSquareCheckFilled className={styles.icons}/>,
      label: "Get Forms Filled",
      subLabel: "Create text, checkbox, and other field types in your document. Upon sending forms, DocHub will walk individuals through each field ensuring everything is completed correctly."
    },
    {
      id:3,
      iconOne: <HiOutlineTemplate className={styles.icons}/>,
      label: "Distribute Reusable Templates",
      subLabel: "Streamline repetitive form distribution by creating templates with fields and roles once, then sending to different individuals."
    },
    {
      id:4,
      iconOne: <AiOutlineClockCircle className={styles.icons}/>,
      label: "Track Document Status",
      subLabel: "Each document has an activity timeline showing who's viewed the document, when they made changes, and more."
    }
  ]
  return (
    <div className={styles.maincont}>
      <div className={styles.homemain}>
      <div className={styles.homecont}>
        <BiMessageSquareCheck className={styles.icon} />
      </div>
      </div>
     

      <div className={styles.textcont}>
       
        <p className={styles.textwo}>ModiDoc Sent</p>
        <p className={styles.textone}>Sign requests allow recipients to review documents, complete forms, and create legally binding signatures.</p>
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

export default Sent