import React from 'react'
import styles from './public.module.css'
import {BiLink} from 'react-icons/bi'
import {AiOutlineImport,AiFillDiff} from 'react-icons/ai'
import { MdPublic,MdPublish } from 'react-icons/md'
import {FaMailBulk,FaUsers} from 'react-icons/fa'


const page = () => {
  const details = [
    {
      id:1,
      iconOne: <BiLink className={styles.icons} />,
      label: "Template Distribution",
      subLabel: "Distribute a template en masse by sharing a public URL. When a user fills a copy of the template, both parties have access to it."
    },
    {
      id:2,
      iconOne: <MdPublish className={styles.icons}/>,
      label: "Publish Documents",
      subLabel: "Public documents allow users on any platform to easily view the contents without worrying about browser compatibility."
    },
  ]
  return (
    <div className={styles.maincont}>
    <div className={styles.homemain}>
    <div className={styles.homecont}>
      <MdPublic className={styles.icon} />
    </div>
    </div>
   

    <div className={styles.textcont}>
     
      <p className={styles.textwo}>ModiDoc Public Documents</p>
      <p className={styles.textone}>Share documents for public viewing, or templates for easily distributing forms..</p>
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