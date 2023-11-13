import React, { useState } from 'react';
import styles from './testimonial.module.css'
import { HiHome,HiOutlineDocumentText,HiOutlineTemplate } from 'react-icons/hi'
import Button from '@/Component/Button/button';
import TestModal from '../../TestimonyModal/testmodal';


const Testimonial = () => {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
 
  return (
    <div className={styles.main}>
    <div className={styles.home}>
        <HiHome />
        <p>Dashboard / Testimonial</p>
      </div>
      <Button onClick={handleOpenModal} />
      <div>
        <TestModal show={showModal} handleClose={handleCloseModal}/>
      </div>
   </div>
  )
}

export default Testimonial