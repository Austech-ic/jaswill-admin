import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import phone from '../../../../../public/img/phone.png'
import bg from '../../../../../public/img/new.jpeg'
import styles from './sectiontwo.module.css'
import { MdArrowForwardIos } from 'react-icons/md';



const page = () => {
  return (
    <div className={styles.mainconts}>
      <p className={styles.stream}>ModiDoc streamlines document signing, distribution and form completion</p>
      <div className={styles.subcont}>
        <div className={styles.contones}>
          <p className={styles.sign}>Sign Documents</p>
          <p className={styles.request}>Sign PDF and other documents with ModiDoc eSignatures and Sign Requests.</p>
          <Link href={`/signindoc`} className={styles.link}>

            <button className={styles.button}>
              Learn More
              <MdArrowForwardIos className={styles.icon} />
            </button>
          </Link>

        </div>
        <div className={styles.conttwos}>
          <Image src={bg} alt="pic"
            className={styles.image}
          />
          <Image src={phone} alt="pic"
            className={styles.images}
          />

        </div>
      </div>
    </div>
  )
}

export default page