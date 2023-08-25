"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/Dashboard.module.css";
import { getAppointmentsRequest } from "@/api/appointments";
import useAuth from "@/hooks/useAuth";
import AppointmentComponent from "./AppointmentComponent";
import { AppointmentDto, pageInfo } from "@/types";

export default function Dashboard() {
  const { authUser } = useAuth();
  const [appointments, setAppointments] = useState<AppointmentDto[]>([]);
  const [pageInfo, setPageInfo] = useState<pageInfo>({
    hasNextPage: false,
    hasPreviousPage: false,
    nextCursor: "",
    previousCursor: "",
  });
  const [fetching, setFetching] = useState(false);
  // handler to get appointments in case of next or previous page
  //NOTE: hasPreviousPage probably has a bug, it is always false
  const getAppointmentHandler = (nextCursor?: string, prevCursor?: string) => {
    if (!authUser) {
      return;
    }
    setFetching(true);
    getAppointmentsRequest(authUser, nextCursor, prevCursor).then(
      (response) => {
        setFetching(false);
        if(response.error) {
          return;
        }
        setAppointments(response.appointments);
        setPageInfo(response.pageInfo);
      }
    );
  };
  useEffect(() => {
    getAppointmentHandler();
  }, [authUser]);

  const handleNextPage = () => {
    getAppointmentHandler(pageInfo.nextCursor);
  };
  const handlePreviousPage = () => {
    getAppointmentHandler(undefined, pageInfo.previousCursor);
  };
  return (
    <>
      <h1>Dashboard</h1>
      { fetching && <div className="loading_spinner" ></div>}
      <div className={styles.navigation} >
        {pageInfo.hasPreviousPage && (
          <button onClick={handlePreviousPage}>Previous</button>
        )}
        {pageInfo.hasNextPage && <button onClick={handleNextPage}>Next</button>}
      </div>
      <div className={styles.appointmentsContainer}>
        {appointments.map((appointment: AppointmentDto) => (
          <AppointmentComponent {...appointment} key={appointment.id} />
        ))}
      </div>
    </>
  );
}
