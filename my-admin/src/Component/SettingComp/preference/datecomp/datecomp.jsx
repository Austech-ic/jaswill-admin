import React, { useState, useEffect } from 'react';
import { format } from 'date-fns'; // Import the format function
import styles from './date.module.css';

const dateFormats = [
    { value: 'yyyy-MM-dd', label: 'yyyy-MM-dd (e.g., 2023-08-23)' },
    { value: 'MM/dd/yyyy', label: 'MM/dd/yyyy (e.g., 08/23/2023)' },
    { value: 'dd/MM/yyyy', label: 'dd/MM/yyyy (e.g., 23/08/2023)' },
    { value: 'yyyy/MM/dd', label: 'yyyy/MM/dd (e.g., 2023/08/23)' },
    { value: 'yyyy.MM.dd', label: 'yyyy.MM.dd (e.g., 2023.08.23)' },
    { value: 'dd-MM-yyyy', label: 'dd-MM-yyyy (e.g., 23-08-2023)' },
    { value: 'dd/MMM/yyyy', label: 'dd/MMM/yyyy (e.g., 23/Aug/2023)' },
    { value: 'MMM dd, yyyy', label: 'MMM dd, yyyy (e.g., Aug 23, 2023)' },
    { value: 'EEEE, MMMM dd, yyyy', label: 'EEEE, MMMM dd, yyyy (e.g., Tuesday, August 23, 2023)' },
    { value: 'yy-MM-dd', label: 'yy-MM-dd (e.g., 23-08-23)' },
    { value: 'yy/MM/dd', label: 'yy/MM/dd (e.g., 23/08/23)' },
    // ... (add more date formats as needed)
  ];

const Datecomp = () => {
  const [selectedDateFormat, setSelectedDateFormat] = useState(dateFormats[0].value);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDate = getCurrentDate(selectedDateFormat);
      setCurrentDate(newDate);
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, [selectedDateFormat]);

  const handleDateFormatChange = (event) => {
    setSelectedDateFormat(event.target.value);
  };

  const getCurrentDate = (dateFormat) => {
    const currentDate = new Date(); // Get the current date as a Date object
    return format(currentDate, dateFormat); // Format the date
  };

  return (
    <div className={styles.selectnew}>
        <div className={styles.select}>
        <label>Select Date Format:</label>
      <select className={styles.selecticon} value={selectedDateFormat} onChange={handleDateFormatChange}>
        {dateFormats.map((format) => (
          <option key={format.value} value={format.value}>
            {format.label}
          </option>
        ))}
      </select>
        </div>
     

      <h4 className={styles.current}>Current Date:</h4>
      <p className={styles.current}>{currentDate}</p>
    </div>
  );
};

export default Datecomp;
