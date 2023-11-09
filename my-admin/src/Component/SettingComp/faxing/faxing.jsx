import styles from './faxing.module.css'

const Faxing = () => {
    return (
        <div className={styles.maincont}>
            <p className={styles.fax}>Faxing</p>
            <hr />
            <div className={styles.buttcont}>
                <button className={styles.button}>Provision Inbound Fax Number</button>
            </div>
            <div>
                <p className={styles.text}>Outbound Fax History</p>
                <hr />
                <div className={styles.cont}>
                    <hr />
                    <div className={styles.contcont}>
                        <p>To</p>
                        <p>Document</p>
                        <p>Date</p>
                    </div>
                    <hr />
                    <p className={styles.center}>You have not sent any faxes.</p>
                </div>
                <div className={styles.prev}>
                    <button className={styles.buttonprev}>Previous</button>
                    <p className={styles.one}>1</p>
                    <button className={styles.buttonprev}>Next</button>
                </div>
            </div>

        </div>
    )
}

export default Faxing