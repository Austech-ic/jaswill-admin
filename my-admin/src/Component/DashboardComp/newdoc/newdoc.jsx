import React, { useState } from 'react';
import {FaUpload} from 'react-icons/fa'
import styles from './newdoc.module.css'



const Newdoc = () => {

    return(
        <div className={styles.maincont}>

           <div>
            <p className={styles.create}>Create New Document</p>
            <hr className={styles.line} />
            <div className={styles.textcont}>
                <div>
                    <p className={styles.head}>Owner:</p>
                    <div className={styles.inputcont}>
                    <input 
                    placeholder='dhhd'
                    className={styles.input} />
                    </div>  
                </div>

                <div>
                <p className={styles.head}>Folder:</p>
                <div className={styles.inputcont}>
                    <input 
                    placeholder='dhhd' 
                    className={styles.input}/>
                    </div>  
                </div>

                <div>
                <p className={styles.head}>Type:</p>
                <div className={styles.inputcont}>
                    <input 
                    placeholder='dhhd'
                    className={styles.input} />
                    </div>  
                </div>

                <div>
                <p className={styles.head}>Privacy:</p>
                <div className={styles.inputcont}>
                    <input 
                    placeholder='dhhd'
                    className={styles.input} />
                    </div>  
                </div>
            </div>
            <div className={styles.contTwo}>
                <div className={styles.first}>
                <div className={styles.mos}>
                <p>Import from</p>
                  </div>
                 
                  <div className={styles.mo}>
                    Your Modidoc
                  </div>
                  <div className={styles.mo}>
                    URL
                  </div>
                  <div className={styles.mo}>
                    Dropbox
                  </div>
                  <div className={styles.mo}>
                    Google Drive
                  </div>
                  <div className={styles.mo}>
                    One Drive
                  </div>
                  <div className={styles.mo}>
                   box
                  </div>
                </div>
                <div  className={styles.second}>
                    <p>Drag and drop your files anywhere</p>
                    <p>Up to 31.5 MB</p>

                    <div className={styles.linecont}>
                        <p>OR</p>
                    </div>
                    <button className={styles.uploadcont}>
                        <FaUpload className={styles.icon} />
                        <p>Upload</p>
                    </button>
                </div>
            </div>
            <div className={styles.butcont}>
                <button className={styles.but}>
                    Create Blank Document
                </button>
            </div>
           </div>

            </div>
    )
}


export default Newdoc;