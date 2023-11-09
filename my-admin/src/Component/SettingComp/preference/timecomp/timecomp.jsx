import React, { useState, useEffect } from 'react';
import styles from './time.module.css'

const timeZones = [
  { value: 'UTC', label: 'UTC' },
  { value: 'Africa/Lagos', label: 'Lagos' },
  { value: 'UTC', label: 'Coordinated Universal Time (UTC)' },
  { value: 'America/New_York', label: 'Eastern Time (ET)' },
  { value: 'America/Chicago', label: 'Central Time (CT)' },
  { value: 'America/Denver', label: 'Mountain Time (MT)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
  { value: 'Europe/London', label: 'Greenwich Mean Time (GMT)' },
  { value: 'Europe/Paris', label: 'Central European Time (CET)' },
  { value: 'Asia/Tokyo', label: 'Japan Standard Time (JST)' },
  { value: 'Australia/Sydney', label: 'Australian Eastern Standard Time (AEST)' },
  { value: 'Asia/Dubai', label: 'Gulf Standard Time (GST)' },
  { value: 'Asia/Kolkata', label: 'Indian Standard Time (IST)' },
  // Add more time zones as needed
];

const Time = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState(timeZones[0].value);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = getCurrentTime(selectedTimeZone);
      setCurrentTime(newTime);
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, [selectedTimeZone]);

  const handleTimeZoneChange = (event) => {
    setSelectedTimeZone(event.target.value);
  };

  const getCurrentTime = (timeZone) => {
    const currentTime = new Date().toLocaleString('en-US', {
      timeZone: timeZone,
    });
    return currentTime;
  };

  return (
    <div className={styles.maincont}>
         <label >Select Time Zone:</label>
      <select className={styles.newselect} value={selectedTimeZone} onChange={handleTimeZoneChange}>
        {timeZones.map((zone) => (
          <option key={zone.value} value={zone.value}>
            {zone.label}
          </option>
        ))}
      </select>
      <h4 className={styles.current}>Current Time:</h4>
      <p className={styles.current}>{currentTime}</p>
    </div>
  );
};

export default Time;
