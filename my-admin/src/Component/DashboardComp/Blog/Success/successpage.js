import React from 'react';
import styles from './success.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Successpage = () => {
  const router = useRouter();
  const { title, description, image } = router.query;

  if (!title || !description || !image) {
    return <p>Loading...</p>;
  }

  const detailsArray = Array.isArray(title)
    ? title.map((_, index) => ({
        id: index + 1,
        title: title[index],
        description: description[index],
        image: image[index],
      }))
    : [
        {
          id: 1,
          title,
          description,
          image,
        },
      ];

  return (
    <div className={styles.main}>
      {detailsArray.map((item) => (
        <div className={styles.subcont} key={item.id}>
          <div>
            <p>Success</p>
          </div>
          <div>
            <p>Title: {item.title}</p>
          </div>
          <div>
            <p>Description: {item.description}</p>
          </div>
          <div>{item.image && <Image src={item.image} alt="Image" width={50} height={50} />}</div>
        </div>
      ))}
    </div>
  );
};

export default Successpage;
