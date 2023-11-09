import styles from './button.module.css'

const Index = () => {
    return(
        <div className={styles.buttcont}>
        <button className={styles.cancel}>Cancel</button>
        <button className={styles.save}>Save</button>
    </div>
    )
}

export default Index