import React from 'react'
import styles from './blog.module.css'
import {BiMessageSquareCheck} from 'react-icons/bi'
import { HiHome,HiOutlineDocumentText,HiOutlineTemplate } from 'react-icons/hi'
import {AiOutlineHome,AiOutlineInbox,AiFillFileAdd,AiFillSetting,AiOutlineClockCircle} from 'react-icons/ai'
import { MdCreate, MdOutlineCreateNewFolder,MdIncompleteCircle } from 'react-icons/md'
import {TbSquareCheckFilled} from 'react-icons/tb'

const Blog = () => {

  return (
   <div className={styles.main}>
    <div className={styles.home}>
        <HiHome />
        <p>Dashboard / Blog</p>
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
   </div>
  )
}

export default Blog