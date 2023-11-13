import React,{ useState } from 'react'
import { MdCreate, MdOutlineCreateNewFolder,MdIncompleteCircle, MdOutlineSaveAlt, MdSaveAlt } from 'react-icons/md'
import styles from './modal.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';


const Modal = ({ handleClose, show, children }) => {
  const router = useRouter()
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  const [selectedMedia, setSelectedMedia] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    id: 1, // Initial ID
    title: '',
    description: '',
    image: null,
  });

  

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
  
    if (file instanceof Blob) {
      setSelectedMedia(file);
  
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  

  const handleSave = () => {
    // Check if the form data is empty
    if (!formData.title || !formData.description) {
      setErrorMessage('Please fill in all fields.');
      return; 
    }
    setErrorMessage('');

    setFormData((prevFormData) => ({
      ...prevFormData,
      id: prevFormData.id + 1,
    }));

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
    
      if (file) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          image: URL.createObjectURL(file), // Set the image directly as a data URL
        }));
      }
    };

  };

  

  const showMediaInGallery = () => {
    // Show the selected image inside the div when the "Choose File" label is clicked
    if (selectedMedia) {
      return (
        <div className="mt-3">
          <Image
          width={50}
          height={50}
            src={URL.createObjectURL(selectedMedia)}
            alt="Selected Thumbnail"
            layout='responsive'
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
          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
          <input placeholder='Title' 
          className={styles.input}
          value={formData.title}
          required
          onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
         </div>

         <div className={styles.divcont}>
          <label className={styles.label}>Comment/Description*</label>
        
          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
          <textarea rows="4" cols="50" 
          className={styles.textarea}
           value={formData.description}
           required
           onChange={(e) => setFormData({ ...formData, description: e.target.value })}/>
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
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
                  </div>

                  <div className={styles.buttonconts}>
                  <button className={styles.buttontwo} onClick={handleSave}>
          <MdSaveAlt />
            Save</button>
         </div>
        </div>
      
      </section>
    </div>
  );
};

export default Modal;
