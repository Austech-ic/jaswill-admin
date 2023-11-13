import React from 'react';
import styles from './success.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '@/Component/Button/button';

const Successpage = () => {
  
  const router = useRouter();
  const { title, description, image } = router.query;

  return (
    <div className={styles.main}>
      <Button />
     <div className={styles.subcont}>
    <div>
    <p>Success</p>
    </div>
    <div>
    <p>Title: {title}</p>
    </div>
    <div>
    <p>Description: {description}</p>
    </div>
    <div>{image && <Image src={image} alt="Image" width={50} height={50} />}</div>
    
      
     
      
     </div>
    </div>
  );
};

export default Successpage;