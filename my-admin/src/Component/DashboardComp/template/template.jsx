import React from 'react'
import styles from './template.module.css'
import {BiMessageSquareCheck,BiShareAlt} from 'react-icons/bi'
import { HiHome,HiOutlineDocumentText,HiOutlineTemplate } from 'react-icons/hi'
import {AiOutlineImport,AiFillDiff} from 'react-icons/ai'
import { MdCreate, MdOutlineCreateNewFolder,MdIncompleteCircle } from 'react-icons/md'
import {TbSquareCheckFilled} from 'react-icons/tb'
import {FaMailBulk,FaUsers} from 'react-icons/fa'
import {SlOrganization} from 'react-icons/sl'

const page = () => {
  const details = [
    {
      id:1,
      iconOne: <AiFillDiff className={styles.icons} />,
      label: "Fill Copies",
      subLabel: "Turn any document into a reusable form that you or others can repeatedly fill."
    },
    {
      id:2,
      iconOne: <FaMailBulk className={styles.icons}/>,
      label: "Bulk Distribution",
      subLabel: "Distribute the URL of a template to a group and each individual can create and fill their own copy."
    },
    {
      id:3,
      iconOne: <FaUsers className={styles.icons}/>,
      label: "Document Roles",
      subLabel: "Streamline sending the same document to multiple parties with reusable roles, such as 'Lessee' and 'Lessor'."
    },
    {
      id:4,
      iconOne: <SlOrganization className={styles.icons}/>,
      label: "Automatically Organize",
      subLabel: "ModiDoc neatly groups copies of templates in folders to keep your documents organized."
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
     
      <p className={styles.textwo}>ModiDoc Templates</p>
      <p className={styles.textone}>Create reusable forms to distribute in bulk or fill yourself.</p>
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