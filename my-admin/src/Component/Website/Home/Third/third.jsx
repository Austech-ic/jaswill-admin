import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import bg from '../../../../../public/img/new.jpeg'
import styles from './Third.module.css'
import { MdArrowForwardIos } from 'react-icons/md';

const Third = () => {
  return (
    <div className={styles.maincontainer} >
      <div className={styles.subcont}>
      <div className={styles.containerone}>
      
      <Image src={bg} alt="pic"
      className={styles.image}
      />
      </div>
      <div className={styles.containertwo}>
        <p className={styles.edit}>
          Edit PDFs Online
        </p>
        <p className={styles.pages}>
        Annotate pages, insert images, create or manage fields, whiteout text, merge PDFs and more.
        </p>
        <Link href={`/pdf`} className={styles.link}>
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

export default Third