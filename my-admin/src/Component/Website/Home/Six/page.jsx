import React from 'react'
import { icons } from 'react-icons'
import { BiArrowFromTop } from 'react-icons/bi'
import { BsFillShareFill, BsGoogle } from 'react-icons/bs'
import { MdSecurity, MdOutlinePictureAsPdf } from 'react-icons/md'
import {HiShare} from 'react-icons/hi'
import styles from './page.module.css'

const page = () => {
    const details = [
        {
            id: 1,
            label: "Fill PDF Forms",
            icons: <MdOutlinePictureAsPdf className={styles.icon} />,
            text: "Easily create, import, edit and fill PDF forms on any computer."
        },
        {
            id: 2,
            label: "Google Integrated",
            icons: <BsGoogle className={styles.icon} />,
            text: "Open files directly from Gmail, Google Drive and Dropbox."
        },
        {
            id: 3,
            label: "Document Security",
            icons: <MdSecurity className={styles.icon} />,
            text: "256-bit SSL encryption, OAuth 2.0 authentication and redundant, encrypted storage."
        },
        {
            id: 4,
            label: "Share and Publish",
            icons: <HiShare className={styles.icon} />,
            text: "Share documents with collaborators or the world from your personal DocHub url."
        },
    ]
    return (
        <div className={styles.maincont}>
            {
                details.map((datum) => (
                    <div key={datum.id} className={styles.subcont}>
                        <div className={styles.cont}>
                        <p className={styles.label}>{datum.label}</p>
                        <p className={styles.iconnt}>{datum.icons}</p>
                        <p className={styles.text}>{datum.text}</p>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default page