import styles from './folder.module.css'
import { IoFolderSharp } from "react-icons/io5";
import { AiOutlineStar,AiOutlineUser,AiFillEdit,AiFillDelete } from "react-icons/ai";
import {BsArrowReturnRight} from "react-icons/bs"



const Folder = () => {
    const userName = 'John'
    return(
        <div className={styles.maincont}>
       <div className={styles.cont}>
        <div>
        <p className={styles.sign}>Manage Folders</p>
         <p className={styles.text}>Group documents, sign requests, or templates into folders to organize your content.</p>
        </div>
        <div>
           <button className={styles.button}>New Folder</button>
        </div>
       </div>
            <hr />
            <div className={styles.subcont}>
                <p className={styles.contone}>Folders</p>
                <hr />
               <div className={styles.contones}>
                <div className={styles.icondiv}>
                <IoFolderSharp />
                <p>{userName}</p>
                </div>
                <div className={styles.icondiv}>
                <AiOutlineStar />
                <AiOutlineUser />
                <AiFillEdit />
                <AiFillDelete color='red' />
                <BsArrowReturnRight />
                </div>
               
               </div>


            </div>
        </div>
    )
}

export default Folder