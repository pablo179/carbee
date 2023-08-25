import styles from "@/styles/Dashboard.module.css";
import { AppointmentDto } from "@/types";

  // this function is used to convert the date string to 00:00 AM/PM format
const localDateStringTime = (date: string) => {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
}
export default function AppointmentComponent({
  scheduledTime,
  status,
  duration,
  workOrder,
}: AppointmentDto) {
  // this function is used to convert the date string to August, 12, 00:00 AM/PM format
  const formattedDate = new Date(scheduledTime).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const startHourAndMinutes = localDateStringTime(scheduledTime);
  const endHourAndMinutes = localDateStringTime(
    new Date(new Date(scheduledTime).getTime() + duration * 60000).toString()
  );
  const formattedTime = `${startHourAndMinutes} - ${endHourAndMinutes}`;
  return (
    <div className={styles.appointment} >
      <div className={styles.appointment__date} >{formattedDate}</div>
      <div className={styles.appointment__status} >{status}</div>
      <div>{formattedTime}</div>
      <div className={styles.appointment__service} >Service:</div>
      <ul className={styles.service_list} >
        <li>{workOrder.service}</li>
      </ul>
    </div>
  );
}
