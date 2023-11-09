import styles from './formpagethree.module.css'
import Image from 'next/image';
import Role from '../../../../public/img/role.webp'


const Signpagetwo = () => {
    return (
        <div className={styles.main}>
            <div className={styles.subcont}>
                <p className={styles.head}>Simplify complex form workflows</p>
                <p className={styles.text}>Assign roles to reusable templates, allowing multiple parties to fill contracts where needed. Upon sending from a template, each receipient is able to fill out their own document to send back, and all copies received are conveniently organized under the master template you created.</p>
            </div>

            <div className={styles.containerone}>
                <Image src={Role} alt="pic"
                    className={styles.image}/>
                    </div>
        </div>
    )
}

export default Signpagetwo