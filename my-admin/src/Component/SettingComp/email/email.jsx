import styles from './email.module.css'
import Button from '../../Button/index'

const Email = () => {
    return (
        <div className={styles.maincont}>
            <p className={styles.default}>Default Email Content</p>
            <hr />
            <div className={styles.subcont}>
                <div className={styles.emailcont}>
                    <p>Email Text Signature</p>
                    <p>Text appended to the bottom of email messages</p>
                </div>
                <hr />
                <div className={styles.cont}>
                <div className={styles.radiocont}>
                    <div className={styles.radio}>
                        <input type='radio'
                        />
                        <p>Use default:</p>
                    </div>
                    <p>Sent from Modidoc</p>
                    </div>

                    <div className={styles.radiocont}>
                    <div className={styles.radio}>
                        <input type='radio'
                       
                        />
                        <p>Use custom:</p>
                    </div>
                    <textarea name="" id="" cols="50" rows="5" className={styles.textarea}></textarea>
                    </div>
                </div>

                <div>
                <Button />
               </div>
            </div>

            <div className={styles.subcont}>
                <div className={styles.emailcont}>
                    <p>Custom Legal Footer</p>
                    <p>Muted text appearing outside the message body and at the bottom of outbound emails</p>
                </div>
                <hr />
                <div className={styles.cont}>
                <div className={styles.radiocont}>
                    <div className={styles.radio}>
                        <input type='radio'
                        />
                        <p>No Content:</p>
                    </div>
                    
                    </div>

                    <div className={styles.radiocont}>
                    <div className={styles.radio}>
                        <input type='radio'
                       
                        />
                        <p>Use custom:</p>
                    </div>
                    <textarea name="" id="" cols="50" rows="5" className={styles.textarea}></textarea>
                    </div>
                </div>

               <div>
                <Button />
               </div>
            </div>
        <div className={styles.outboundcont}>
            <p className={styles.outbound}>Outbound Email History</p>
            <hr />
            <p className={styles.message}>You have not sent any emails.</p>
            <div>
                <Button />
               </div>
        </div>
        </div>
    )
}

export default Email