import Link from 'next/link';
import Navbar from '@/Component/Website/Navigation/Navbar/page'
import styles from './signheader.module.css'



const Signheader = () => {
    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.subcont}>
                <p className={styles.headtext}>Instantly eSign Any Document</p>
                <p className={styles.subtext}>Create legally binding eSignatures faster than ever before</p>
            </div>

            <div className={styles.butt}>
                <div className={styles.buttoncont}>

                    <button className={styles.editbutton}>
                        <Link href={`/`} className={styles.link}>
                            Edit Pdf
                        </Link>
                    </button>


                    <button className={styles.pdfbutton}>
                        <Link href={`/pdf`} className={styles.link}>
                            PDF Forms & Templates
                        </Link>
                    </button>
                    <button className={styles.signdoc}>
                        <Link href={`/signindoc`} className={styles.link}>
                            Sign Documents
                        </Link>
                    </button>
                </div>
            </div>





        </div>
    )
}


export default Signheader;