import styles from './signrequest.module.css'
import Button from '../../Button/index'
const Signrequest = () => {
    return (
        <div className={styles.maincont}>
            <p className={styles.sign}>Sign Requests</p>
            <hr />
            <div className={styles.subcont}>
                <div className={styles.cont}>
                    <p className={styles.rem}>Reminders</p>
                    <p className={styles.text}>Set up reminder notifications to signers who haven't completed a sign request.</p>
                </div>
                <hr />
                <div className={styles.contwo}>
                    <div className={styles.contnew}>
                        <input type="checkbox" name="" id="" className={styles.inp} />
                        <p >Enable signer reminders by default</p>
                    </div>
                    <p className={styles.text}>Note: Reminders can also be turned on or off on a per sign request basis before sending each request.</p>
                </div>
                <div className={styles.schcont}>
                    <p className={styles.rem}>Reminder Schedule</p>
                    <div className={styles.divcont}>
                        <select name="" id="" className={styles.select}>
                            <option value="" disabled>Select an option</option>
                            <option value="public" selected>Dont send additional reminders</option>
                            <option value="unlisted">Unlisted</option>
                            <option value="private">Private</option>
                        </select>
                    </div>

                    <div>
                        <p className={styles.thendiv}>then...</p>
                        <div className={styles.divcont}>
                            <select name="" id="" className={styles.select}>
                                <option value="" disabled>Select an option</option>
                                <option value="public" selected>Dont send additional reminders</option>
                                <option value="unlisted">Unlisted</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                    </div>


                    <div>
                        <p className={styles.thendiv}>then...</p>
                        <div className={styles.divcont}>
                            <select name="" id="" className={styles.select}>
                                <option value="" disabled>Select an option</option>
                                <option value="public" selected>Dont send additional reminders</option>
                                <option value="unlisted">Unlisted</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className={styles.buttoncont}>
                   <Button />
                </div>


            </div>

            <div className={styles.subcont}>
                <div className={styles.cont}>
                    <p className={styles.rem}>Expiration</p>
                    <p className={styles.text}>Set unfinalized sign requests to expire after a certain time period. No additional changes can be made after expiration.</p>
                </div>
                <hr />
                <div className={styles.contwo}>
                    <div className={styles.contnew}>
                        <input type="checkbox" name="" id="" className={styles.inp} />
                        <p >Expire inactive signers by default</p>
                    </div>
                    <p className={styles.text}>Note: Signer expirations can be turned on or off on a per sign request basis before sending each request.</p>
                </div>
                <div className={styles.schcont}>
                    <p className={styles.rem}>Expiration Period</p>
                    <div className={styles.divcont}>
                        <select name="" id="" className={styles.select}>
                            <option value="" disabled>Select an option</option>
                            <option value="public" selected>Dont send additional reminders</option>
                            <option value="unlisted">Unlisted</option>
                            <option value="private">Private</option>
                        </select>
                    </div>

                    


                    
                </div>
                <div className={styles.buttoncont}>
                   <Button />
                </div>


            </div>


            <div className={styles.subcont}>
                <div className={styles.cont}>
                    <p className={styles.rem}>Default Signing Order</p>
                    <p className={styles.text}>Set up reminder notifications to signers who haven't completed a sign request.</p>
                </div>
                <hr />
             
                <div className={styles.schconts}>
                  
                    <div className={styles.divconts}>
                        <select name="" id="" className={styles.selects}>
                            <option value="" disabled>Select an option</option>
                            <option value="public" selected>One at a time</option>
                            <option value="unlisted">All at once</option>
                        </select>
                    </div>
                    <div className={styles.contone}>
                        <p className={styles.label}>One at a time:</p>
                        <p className={styles.text}>(Recommended) Only one signer may sign the document at a time. Signers will be notified sequentially when it is their turn. This option may take longer, but may also offer a more robust audit trail.</p>
                    </div>
                    <div className={styles.contones}>
                        <p className={styles.label}>All at once:</p>
                        <p className={styles.text}>(Fastest) All signers can complete the document at any time. All signers will be notified and allowed to sign as soon as the sign request is sent.</p>
                    </div>
                    <div>
                    <p className={styles.text}>Note: Signing order can also be specified upon preparing sign request.</p>
                    </div>


                 


                 

                </div>
                


            </div>


            <div className={styles.subcont}>
                <div className={styles.cont}>
                    <p className={styles.rem}>Default Request Message</p>
                    <p className={styles.text}>Set the email message body used when sending sign requests</p>
                </div>
                <hr />
                <div className={styles.cont}>
                <div className={styles.radiocont}>
                    <div className={styles.radio}>
                        <input type='radio'
                        />
                        <p>Use default:</p>
                    </div>
                    <p className={styles.text}>Please review, sign, and complete this document.</p>
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
                <div className={styles.textcont}>
                <p className={styles.text}>Note: Message content can also be specified upon preparing sign requests.</p>
                </div>
              
               
                <div className={styles.buttoncont}>
                   <Button />
                </div>


            </div>

            <div className={styles.subcont}>
                <div className={styles.cont}>
                    <p className={styles.rem}>Additional Options</p>
                    <p className={styles.text}>Set additional default options for sign requests.</p>
                </div>
                <hr />
                <div className={styles.contwo}>
                    <div className={styles.contnew}>
                        <input type="checkbox" name="" id="" className={styles.inp} />
                        <p >Include signer locations in certified PDF by default</p>
                    </div>
                    <div className={styles.contnew}>
                        <input type="checkbox" name="" id="" className={styles.inp} />
                        <p >Show document ID on finalized PDF by default</p>
                    </div>
                    <div className={styles.contnew}>
                        <input type="checkbox" name="" id="" className={styles.inp} />
                        <p >Only allow hand-drawn signatures by default</p>
                    </div>
                    <p className={styles.text}>Note: These options can also be turned on or off on a per sign request basis before sending each request.</p>
                </div>
              
               


            </div>


        </div>
    )
}

export default Signrequest