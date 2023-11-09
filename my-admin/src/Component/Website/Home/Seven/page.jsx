import React from 'react'
import styles from './page.module.css'
import {FcGoogle} from 'react-icons/fc'
import {MdAlternateEmail} from 'react-icons/md'


const page = () => {
  return (
    <div className={styles.maincont}>
        <p className={styles.textone}>Get started with ModiDoc for free</p>
        <p className={styles.textwo}>See why DocHub is the fastest growing PDF editor and document signing platform.</p>
        <div className={styles.buttoncont}>
        <button className={styles.button}>
            <FcGoogle className={styles.icon} />
            Sign in with Google
        </button>
        <button className={styles.button} >
            <MdAlternateEmail className={styles.icon} />
            Sign in with email
        </button>
        </div>
        
    </div>
  )
}

export default page