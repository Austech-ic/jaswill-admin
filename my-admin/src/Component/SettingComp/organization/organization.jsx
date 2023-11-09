import styles from './organization.module.css'

const Organization = () => {
    return(
        <div className={styles.maincont}>
           <p className={styles.organiz}>Organization</p>
           <div className={styles.line}></div>
           <div className={styles.subcont}>
                    <p className={styles.date}>Your Organization</p>
                    <div className={styles.line}></div>
                    <div className={styles.newconts}>
                        <p>No organization found</p>
                        <div className={styles.butcont}>
                            
                        <button className={styles.button}>Open Cookies Consent Panel</button>
                        </div>
                        
                    </div>
                </div>
           
        </div>
    )
}

export default Organization