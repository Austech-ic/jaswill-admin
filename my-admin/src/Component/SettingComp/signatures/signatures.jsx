import styles from './signatures.module.css'

const Signatures = () => {
    return(
        <div className={styles.maincont}>
          <p className={styles.sign}>Signatures & Initials</p>
          <hr />
          <div className={styles.subcont}>
            <div className={styles.sub}>
            <p className={styles.phone}>Signatures</p>
                <div className={styles.contbutton}>
                    <button className={styles.phonebutt}>New</button>
                </div>
            </div>
                
            <hr />
                <p className={styles.textnew}>You haven't created any signatures</p>
               

            </div>
            <div className={styles.subcont}>
            <div className={styles.sub}>
            <p className={styles.phone}>Initials</p>
                <div className={styles.contbutton}>
                    <button className={styles.phonebutt}>New</button>
                </div>
            </div>
                
            <hr />
                <p className={styles.textnew}>You haven't created any initials</p>
               

            </div>
         
        </div>
    )
}

export default Signatures