import { FaGoogle } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { MdOutlineCancelPresentation } from 'react-icons/md'
import { TbBrandGoogleDrive } from 'react-icons/tb'
import { BiSolidKey } from 'react-icons/bi'
import { TbBox } from 'react-icons/tb'
import Link from 'next/link';
import styles from './account.module.css'

const Account = () => {
    const userEmail = "johndoe@gmail.com"
    return (
        <div className={styles.maincont}>
            <p className={styles.organiz}>Account Details</p>
            <div className={styles.line}></div>
            <div className={styles.subcont}>
                <p className={styles.date}>Authorizations</p>
                <div className={styles.line}></div>
                <div className={styles.newconts}>
                    <p>Your primary Modidoc email address will be used for account-related notifications (e.g. account changes, incoming Sign Requests, and billing receipts)</p>
                    <p>Last Sign In:</p>
                    <div className={styles.line}></div>

                    <div className={styles.iconcont}>
                        <div className={styles.contone}>
                            <p>{userEmail}</p>
                            <button className={styles.button}>Primary</button>
                        </div>
                        <div className={styles.conttwo}>
                            {/* <FaGoogle /> */}
                            <RiDeleteBin6Line className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.inputcont}>
                        <input type="text"
                            placeholder='mail@email.com'
                            className={styles.input} />
                        <button className={styles.buttontwo}>Add Email Address</button>
                    </div>


                </div>
            </div>
            <div className={styles.subconts}>
                <div className={styles.thirdcont}>
                    <div className={styles.subthird}>
                        <TbBrandGoogleDrive className={styles.icons} />
                        <p>Google Integration</p>
                    </div>
                    <MdOutlineCancelPresentation className={styles.icons} />
                </div>
                <div className={styles.drivecont}>
                    <p>Managing Google Drive's integration with Modihub must be done from within Google Drive.</p>
                    <p>Changes made on this page, including destroying your account entirely, will not change your Google Drive settings.</p>
                    <div className={styles.intcont}>
                        <button className={styles.buttonthree}>
                            <BiSolidKey className={styles.iconone} />
                            View or Change Permission</button>
                        <button className={styles.buttonthree}>
                            <TbBox className={styles.iconone} />
                            Manage Integration</button>
                        <Link href={`/`} className={styles.link}>
                            <p className={styles.text}>Click setting to manage app</p>
                        </Link>

                    </div>

                </div>




            </div>

            <div className={styles.subcont}>
                <p className={styles.phone}>Phone Verification</p>
                <div className={styles.line}></div>
                <p className={styles.textnew}>You have not verified a phone number with this account.</p>
                <div className={styles.contbutton}>
                    <button className={styles.phonebutt}>Add Phone Verification</button>
                </div>

            </div>


            <div className={styles.lastcont}>
                <p className={styles.danger}>Danger Zone</p>
                <div className={styles.line}></div>
                <div className={styles.subcont}>
                    <div className={styles.last}>
                    <div className={styles.accountcont}>
                        <p>Delete Account</p>
                        <p>Once you delete your account, there is no going back. Please be certain.</p>
                    </div>
                    <div className={styles.deletcont}>
                        <button className={styles.buttonlast}>Delete my account</button>
                    </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Account