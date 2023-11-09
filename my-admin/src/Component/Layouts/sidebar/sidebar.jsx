import React from 'react'
import {AiOutlineHome,AiOutlineInbox,AiFillFileAdd,AiFillSetting} from 'react-icons/ai'
import {BiMessageSquareCheck} from 'react-icons/bi'
import {HiOutlineDocumentText,HiOutlineTemplate} from 'react-icons/hi'
import {MdPublic,MdOutlineFax} from 'react-icons/md'
import {IoMdAddCircleOutline} from 'react-icons/io'
import Link from 'next/link';
import styles from './sidebar.module.css'


const Sidebar = () => {
  const details = [
    {
      id:1,
      icon: <AiOutlineHome className={styles.icon} />,
      title: "Dashboard",
      link: "/dashboard",
      path: "/dashboard",
      
    },
    {
      id:2,
      icon: <AiOutlineInbox className={styles.icon} />,
      title: "Real Estate",
      link: "/dashboard/inbox",
      path: "/dashboard/inbox",
    },
    {
      id:3,
      icon: <BiMessageSquareCheck className={styles.icon} />,
      title: "Blog",
      link: "/dashboard/sent",
      path: "/dashboard/sent",
    },
    {
      id:4,
      icon: <HiOutlineDocumentText className={styles.icon} />,
      title: "Testimonial",
      link: "/dashboard/document",
      path: "/dashboard/document",
    },
    {
      id:5,
      icon: <HiOutlineTemplate className={styles.icon} />,
      title: "Account",
      link: "/dashboard/template",
      path: "/dashboard/template",
    },
    {
      id:6,
      icon: <MdPublic className={styles.icon} />,
      title: "Static Blocks",
      link: "/dashboard/public",
     path: "/dashboard/public",
    },
    {
      id:7,
      icon: <MdOutlineFax className={styles.icon} />,
      title: "Payment",
      link: "/dashboard/fax",
      path: "/dashboard/fax",
    },
    {
      id:7,
      icon: <MdOutlineFax className={styles.icon} />,
      title: "Media",
      link: "/dashboard/fax",
      path: "/dashboard/fax",
    },
    {
      id:7,
      icon:  <AiFillSetting className={styles.icons} />,
      title: "Setings",
      link: "/dashboard/fax",
      path: "/dashboard/fax",
    },
  ]
  
  return (
    <div className={styles.sidebar}>
     
   
    <div className={styles.container}>
      {
        details.map((datum) => (
          <div key={datum.id} className={styles.cont} >
            <Link href={datum.path} className={styles.link}>
                <p>{datum.icon}</p>
                <p>{datum.title}</p>
             
            </Link>
          </div>
        ))
      }
    </div>




  
  
  </div>
  )
}

export default Sidebar;