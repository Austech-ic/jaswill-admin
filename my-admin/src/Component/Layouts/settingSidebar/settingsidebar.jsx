import React from 'react'
import {AiOutlineHome,AiOutlineInbox,AiFillFileAdd,AiFillSetting,AiFillFolder} from 'react-icons/ai'
import {BiMessageSquareCheck} from 'react-icons/bi'
import {HiOutlineDocumentText,HiOutlineTemplate} from 'react-icons/hi'
import {MdPublic,MdOutlineFax} from 'react-icons/md'
import {IoMdAddCircleOutline} from 'react-icons/io'
 import {RiProfileLine} from 'react-icons/ri'
 import {MdOutlineRoomPreferences,MdSecurity,MdOutlineAlternateEmail,MdOutlineLabel} from 'react-icons/md'
 import {LiaMoneyBillWaveSolid} from 'react-icons/lia'
 import {VscOrganization} from 'react-icons/vsc'
 import {RiAccountCircleFill} from 'react-icons/ri'
 import {FaXbox,FaSignature} from 'react-icons/fa'
import Link from 'next/link';
import styles from './settingsidebar.module.css'


const Settingsidebar = () => {
    const details = [
        {
          id:1,
          icon: <RiProfileLine className={styles.icon} />,
          title: "Profile",
          link: "/setting",
          path: "/setting",
        },
        {
          id:2,
          icon: <MdOutlineRoomPreferences className={styles.icon} />,
          title: "Preference",
          link: "/setting/preference",
          path: "/setting/preference",
        },
        {
          id:3,
          icon: <LiaMoneyBillWaveSolid className={styles.icon} />,
          title: "Billing",
          link: "/setting/billing",
         path: "/setting/billing",
        },
        {
          id:4,
          icon: <VscOrganization className={styles.icon} />,
          title: "Organization",
          link: "/setting/organization",
          path: "/setting/organization",
        },
        {
          id:5,
          icon: <RiAccountCircleFill className={styles.icon} />,
          title: "Account",
          link: "/setting/account",
          path: "/setting/account",
        },
        {
          id:6,
          icon: <MdSecurity className={styles.icon} />,
          title: "Security",
          link: "/setting/security",
          path: "/setting/security",
        },
        {
          id:7,
          icon: <MdOutlineAlternateEmail className={styles.icon} />,
          title: "Email",
          link: "/setting/email",
          path: "/setting/email",
        },
      
          {
            id:8,
            icon: <MdOutlineFax className={styles.icon} />,
            title: "Sign Request",
            link: "/setting/signrequest",
            path: "/setting/signrequest",
          },
          {
            id:9,
            icon: <FaSignature className={styles.icon} />,
            title: "Signatures",
            link: "/setting/signature",
            path: "/setting/signature",
          },
          {
            id:10,
            icon: <MdOutlineFax className={styles.icon} />,
            title: "Faxing",
            link: "/setting/faxing",
           path: "/setting/faxing",
          },
          {
            id:11,
            icon: <AiFillFolder className={styles.icon} />,
            title: "Folder",
            link: "/setting/folder",
            path: "/setting/folder",
          },
          {
            id:12,
            icon: <MdOutlineLabel className={styles.icon} />,
            title: "Labels",
            link: "/setting/label",
            path: "/setting/label",
          },
      ]
  return (
    <div className={styles.sidebar}>
    <div className={styles.mainhead}>
    <Link href={`/dashboard`} className={styles.dashlink}>
    <div className={styles.headcont}>
      <AiOutlineHome className={styles.icons} />
      <p>Dashboard</p>
    </div>
    </Link>
 
    </div>
    <hr className={styles.line} />
  
  <div className={styles.mainheads}>
    <div className={styles.headcontainer}>
      <p className={styles.personal}>PERSONAL SETTINGS</p>
    </div>
    </div>
  
 
  <div className={styles.container}>
    {
      details.map((datum) => (
        <div key={datum.id} className={styles.cont}>
          <Link href={datum.path} className={styles.link}>
              <p>{datum.icon}</p>
              <p>{datum.title}</p>
           
          </Link>
        </div>
      ))
    }
  </div>

 
 
    <hr className={styles.line} />

    <Link href={`/setting/organization/new`} className={styles.dashlink}>
    <div className={styles.mainheader}>
    <div className={styles.header}>
      <IoMdAddCircleOutline className={styles.icons} />
      <p>New Organization</p>
    </div>
    </div>
    </Link>

</div>
  )
}

export default Settingsidebar 