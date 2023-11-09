import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import Time from './timecomp/timecomp'
import Date from './datecomp/datecomp'
import styles from './preference.module.css'

const Preference = () => {


    return (
        <div className={styles.maincont}>
            <div>
                <p className={styles.pref}>Preference</p>
                <div className={styles.line}></div>

                <div className={styles.subcont}>
                    <p className={styles.date}>Date and Time</p>
                    <div className={styles.line}></div>
                    <div className={styles.newcont}>
                        <Time />
                        <Date />
                    </div>
                </div>
                <div className={styles.subcont}>
                    <p className={styles.date}>Cookies</p>
                    <div className={styles.line}></div>
                    <div className={styles.newconts}>
                        <button className={styles.button}>Open Cookies Consent Panel</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Preference