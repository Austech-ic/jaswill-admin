import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profileimg from '../../../../public/img/dp.jpeg'
import {HiExternalLink} from 'react-icons/hi'
import Button from '../../Button/index'
import styles from './profile.module.css'


const Profile = () => {
    const [name, setName] = useState('John Doe'); // Initial value for the input

    const handleNameChange = (event) => {
        setName(event.target.value); // Update the name when the input value changes
    };
    return (
        <div className={styles.maincont}>

            <div>
                <p className={styles.profile}>Profile</p>
                <hr className={styles.line} />
            </div>

            <div className={styles.subcont}>
                <div className={styles.labelconts}>
                    <label className={styles.label}>Email:</label>
                    <p className={styles.name}>johndoe@gmail.com</p>
                </div>
                <div className={styles.labelcont}>
                    <label  className={styles.label}>Name:</label>
                    <input placeholder='John Doe'
                        className={styles.input} />
                </div>

                <div className={styles.labelcont}>
                    <label  className={styles.label}>Domain:</label>
                    <input
                        type="text"
                        placeholder="your name"
                        value={name}
                        onChange={handleNameChange}
                        className={styles.input}
                    />
                </div>

                <div className={styles.labelcont}>
                    <label  className={styles.label}>Public Page:</label>
                    <div className={styles.selectcont}>
                       
                        <select name="" id="" className={styles.select}>
                        <option value="" disabled>Select an option</option>
                        <option value="public" selected>Public</option>
                        <option value="unlisted">Unlisted</option>
                        <option value="private">Private</option>
                        </select>
                    </div>
                </div>
                <div className={styles.textdiv}>
                <p>Document set as public can be seen here:</p>
                <Link href={`/`}>
                <p className={styles.modilink}>modidoc.com/ <HiExternalLink /></p>
                </Link>
                </div>

               <Button />

               <div className={styles.logocont}>
                <p>Logo</p>
                <div className={styles.imgcont}>
                <Image src={profileimg} alt={profileimg} />
                <div className={styles.buttonconts}>
                <button className={styles.buttonone}>Upload New</button>
                <button className={styles.buttontwo}>Clear</button>
               </div>
                </div>
               </div>


               {/* <div>
                <p>Custom Branding</p>
                </div> */}

                



            </div>






        </div>
    )
}

export default Profile;