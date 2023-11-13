import React,{ useState } from 'react'
import { MdCreate, MdOutlineCreateNewFolder,MdIncompleteCircle, MdOutlineSaveAlt, MdSaveAlt } from 'react-icons/md'
import styles from './modal.module.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedMedia(file); // Update state with the selected file
  };

  const showMediaInGallery = () => {
    // Show the selected image inside the div when the "Choose File" label is clicked
    if (selectedMedia) {
      return (
        <div className="mt-3">
          <Image
          width={200}
          height={200}
            src={URL.createObjectURL(selectedMedia)}
            alt="Selected Thumbnail"
            className={styles.image}
          />
        </div>
      );
    }
  };

  return (
    <div className={`${styles.modal} ${showHideClassName}`}>
      <section className={styles.modalMain}>
        {children}
        <div className={styles.contone}>
        <div className={styles.divcont}>
          <label className={styles.label}>Title*</label>
          <input placeholder='Title' className={styles.input} />
         </div>
         <div className={styles.divcont}>
          <label className={styles.label}>Comment*</label>
          <textarea rows="4" cols="50" className={styles.textarea}>Description</textarea>
         </div>
         <div className={styles.divcont}>
                    
         <label htmlFor="file-upload" className={styles.upload}>
          {showMediaInGallery()}
          <input
            type="file"
            onChange={handleFileUpload}
            accept="image/*"
            style={{ display: 'block' }}
            id="file-upload"
          />
        </label>
                  </div>

                  <div className={styles.buttonconts}>
            <button className={styles.buttontwo}>
          <MdSaveAlt />
            Save</button>
         </div>
        </div>
      
      </section>
    </div>
  );
};

export default Modal;
