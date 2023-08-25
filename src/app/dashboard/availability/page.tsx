'use client';
import { useState } from 'react';
import styles from "@/styles/Availability.module.css";
import { getAvailabilityRequest } from "@/api/availability";
import useAuth from "@/hooks/useAuth";

export default function Availavility() {
  const { authUser } = useAuth();
  const [date, setDate] = useState(new Date());
  const [availability, setAvailability] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [fetching, setFetching] = useState(false);
  const localDateStringTime = (date: string) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
  }
  const handleDateChange = async (e: any) => {
    if (!authUser) {
      return;
    }
    setError(null);
    if(e.target.value === '') return;
    if(e.target.value === date) return;
    if(e.target.value <= new Date().toISOString().split('T')[0]) {
      setError('You can only check availability for future dates');
      return;
    }
    setFetching(true);
    setDate(e.target.value);
    const result = await getAvailabilityRequest(authUser, e.target.value);
    if(result.error) {
      setError(result.error);
      return;
    }
    setAvailability(result.availability);
    setFetching(false);
  }
  const handleTimeClick = (time: string) => {
    alert("You have selected " + localDateStringTime(time));
  }
  return (
    <>
      <h1>Availability</h1>
      <div >
        <h2>Select the date you want to check</h2>
        <input type="date" onChange={handleDateChange} className={styles.dateSelect} />
        {error && <p className={styles.error} >{error}</p>}
      </div>
      <div className={styles.timesContainer} >
        {fetching && <div className="loading_spinner"></div>}
        {availability.map((time, index) => (
          <div key={index} className={styles.time} onClick={() => handleTimeClick(time)} >
            <p>{localDateStringTime(time)}</p>
          </div>
        ))}
      </div>
    </>
  );
}