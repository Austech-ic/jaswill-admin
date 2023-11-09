import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'


const navbar = () => {
  return (
    <div className={styles.navcontainer}>
        <div className={styles.logo}>
            <p>MODIDOC</p>
        </div>
        <div className={styles.navsubcont}>
            <div className={styles.navinnerone}> 
            <p className={styles.list}>Pricing</p>
            <p className={styles.list}>Features</p>
            </div>
            <div className={styles.navinnertwo}>
              <Link href={`login`} className={styles.Link}>
              <p className={styles.list}>Sign in</p>
              </Link>
              <Link href={`/signup`} className={styles.Link}>
              <p className={styles.list}>Sign up</p>
              </Link>
            
            </div>
            
            
        </div>
    </div>
  )
}

export default navbar