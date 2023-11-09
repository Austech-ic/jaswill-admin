import Image from 'next/image';
import styles from './signpagefour.module.css'
import Legal from '../../../../public/img/legal.webp'



const SignpageFour = () => {
    return(
        <div className={styles.main}>
            <div className={styles.subcont}>
                <p className={styles.head}>Legally binding Signatures</p>
                <p className={styles.text}>In accordance with the ESIGN Act (enacted June 30, 2000), contracts signed and sent from Modidoc constitute legally binding agreements between the sender and receiver.</p>

                <p className={styles.text}>When a document is signed, Modidocrecords the authentication details of the event. These details are made available to all parties of the document and constitute a legal audit trail.</p>
            </div>

            <div className={styles.containerone}>
                <Image src={Legal} alt="pic"
                    className={styles.image}/>
                    </div>
        </div>
    )
}

export default SignpageFour;