import styles from './signpagetwo.module.css'


const Signpagetwo = () => {
    return (
        <div className={styles.container}>
            <p className={styles.head}>Send and receive real signatures</p>
            <p className={styles.sign}>Who needs to sign?</p>
            <div className={styles.main}>
                <div className={styles.subcont}>

                    <div className={styles.divcont}>
                        <p  className={styles.word}><span className={styles.text}>You</span> - Import your document to Modidoc straight from your inbox, drag and drop your signature, and email it back. No need to print and scan!</p>

                    </div>
                    <div className={styles.divcont}>
                        <p className={styles.word}><span className={styles.text}>Someone else</span> - Request signatures or completed forms from other parties and Modidoc will walk the recipients through the document, field-by-field, until its signed and finalized.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Signpagetwo