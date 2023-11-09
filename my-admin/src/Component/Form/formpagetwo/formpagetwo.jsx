import styles from './formpagetwo.module.css'
import New from '../../../../public/img/new.jpeg'
import Image from 'next/image';


const Signpagetwo = () => {
    return (
        <div className={styles.main}>
        <div className={styles.subcont}>
            <p className={styles.head}>Create, edit, and fill PDF forms</p>
            <p className={styles.text}>Modidoc fully supports all native PDF fields, including linked fields. Users are given an intuitive experience which seamlessly bridges the gap between PDFs and the browser. The Field Manager puts you in control to modify existing fields, or create new fields for checkboxes, signatures, initials and more.</p>
        </div>

        <div className={styles.containerone}>
            <Image src={New} alt="pic"
                className={styles.image}/>
                </div>
    </div>
    )
}

export default Signpagetwo