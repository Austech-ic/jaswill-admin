import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import bg from '../../../../../public/img/new.jpeg'
import { MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.maincontainer} >
      <div className={styles.subcont}>
    <div className={styles.containerone}>
     
      {/* <img src="./bg.webp" alt="pic" className={styles.image} /> */}
      <Image src={bg} alt="pic"
      className={styles.image}
      />
      
    </div>
    <div className={styles.containertwo}>
      <p className={styles.edit}>
      Create Templates and <br /> PDF Forms
      </p>
      <p className={styles.pages}>
      Create or edit forms then use DocHub Templates to streamline distribution.
      </p>
      <Link href={`/Create`} className={styles.link}>
      <button className={styles.button}>
        Learn More
        <MdArrowForwardIos className={styles.icon} />
      </button>
      </Link>

    </div>
    </div>
  </div>
  )
}

export default page