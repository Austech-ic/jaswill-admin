import React from 'react'
import {AiOutlineHome,AiOutlineInbox,AiFillFileAdd,AiFillSetting} from 'react-icons/ai'
import {BiMessageSquareCheck} from 'react-icons/bi'
import {HiOutlineDocumentText,HiOutlineTemplate} from 'react-icons/hi'
import {MdPublic,MdOutlineFax} from 'react-icons/md'
import {IoMdAddCircleOutline} from 'react-icons/io'
import Link from 'next/link';
import styles from './sidebar.module.css'


const Sidebar = ({ closeMenu }) => {

  const handleMenuItemClick = () => {
    // Close the menu when any menu item is clicked
    closeMenu();
  }
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
      link: "/dashboard/real_estate",
      path: "/dashboard/real_estate",
    },
    {
      id:3,
      icon: <BiMessageSquareCheck className={styles.icon} />,
      title: "Blog",
      link: "/dashboard/blog",
      path: "/dashboard/blog",
    },
    {
      id:4,
      icon: <HiOutlineDocumentText className={styles.icon} />,
      title: "Testimonial",
      link: "/dashboard/testimonial",
      path: "/dashboard/testimonial",
    },
    {
      id:5,
      icon: <HiOutlineTemplate className={styles.icon} />,
      title: "Account",
      link: "/dashboard/account",
      path: "/dashboard/account",
    },
    {
      id:6,
      icon: <MdPublic className={styles.icon} />,
      title: "Static Blocks",
      link: "/dashboard/static_block",
     path: "/dashboard/static_block",
    },
    {
      id:7,
      icon: <MdOutlineFax className={styles.icon} />,
      title: "Payment",
      link: "/dashboard/payment",
      path: "/dashboard/payment",
    },
    {
      id:7,
      icon: <MdOutlineFax className={styles.icon} />,
      title: "Media",
      link: "/dashboard/media",
      path: "/dashboard/media",
    },
    {
      id:7,
      icon:  <AiFillSetting className={styles.icons} />,
      title: "Setings",
      link: "/dashboard/settings",
      path: "/dashboard/settings",
    },
  ]
  
  return (
    <div className={styles.sidebar}>
     
   
    <div className={styles.container}>
      {
        details.map((datum) => (
          <div key={datum.id} className={styles.cont} >
            <Link href={datum.path} onClick={handleMenuItemClick} className={styles.link}>
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