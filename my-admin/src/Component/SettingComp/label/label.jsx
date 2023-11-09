import styles from './label.module.css'

const Label = () => {
    return(
        <div className={styles.maincont}>
       <p className={styles.manage}>Manage Labels</p>
       <hr />
       <div className={styles.buttcont}>
        <button className={styles.button}>New Label</button>
       </div>
       <hr className={styles.line}/>

    <div className={styles.subcont}>
        <div className={styles.contone}>
        <p className={styles.label}>Labels</p>
        <p className={styles.text}>Apply Modidoc Labels to documents, sign requests, or templates to organize your documents.</p>
        </div>
        <hr />
        <div className={styles.contwo}>
        <p className={styles.label}>No document labels found.</p>
        <p className={styles.text}>Modidoc Labels help you identify useful information. Create new labels and apply them to documents, sign requests, or templates to organize your documents. Labels can be created specifically for an organization or for a user.</p>
        </div>
        
    </div>
        </div>
    )
}

export default Label