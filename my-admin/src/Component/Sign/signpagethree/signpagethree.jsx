import styles from './signpagethree.module.css'
import Image from 'next/image';
import Work from '../../../../public/img/work.webp'


const Signpagetwo = () => {
    return (
        <div className={styles.main}>
            <div className={styles.subcont}>
                <p className={styles.head}>Multiple signers workflows</p>
                <p className={styles.text}>Getting a document signed by multiple individuals has never been easier.<br /> Specify who needs to sign and where, then send the document as a Sign Request and Modidoc handles the rest.</p>
            </div>

            <div className={styles.containerone}>
                <Image src={Work} alt="pic"
                    className={styles.image}/>
                    </div>
        </div>
    )
}

export default Signpagetwo