import axios from "axios";
import { AppointmentDto, pageInfo } from "@/types";

interface AppointmentResponse {
  error?: string;
  appointments: AppointmentDto[];
  pageInfo: pageInfo;
}
export async function getAppointmentsRequest(
  token: string,
  nextCursor?: string,
  prevCursor?: string
): Promise<AppointmentResponse> {
  try {
    const response = await axios.get("/appointments", {
      params: {
        size: 5,
        ...(nextCursor && { after: nextCursor }),
        ...(prevCursor && { before: prevCursor }),
      },
      headers: { Authorization: `Bearer ${token}` },
    });
    const formattedAppointments = response.data.edges.map(
      (appointment: { node: AppointmentDto }) => {
        return {
          scheduledTime: appointment.node.scheduledTime,
          status: appointment.node.status,
          duration: appointment.node.duration,
          workOrder: { service: appointment.node.workOrder.service },
          id: appointment.node.id,
        };
      }
    );
    return {
      appointments: formattedAppointments,
      pageInfo: response.data.pageInfo,
    };
  } catch (error: any) {
    return {
      error: error?.response?.data?.message || error.message,
      appointments: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        previousCursor: "",
        nextCursor: "",
      },
    };
  }
}
