import axios from "axios";
interface AvailabilityResponse {
    error?: string;
    availability: string[];
}
export async function getAvailabilityRequest(token: string, date?: string): Promise<AvailabilityResponse> {
  try {
    const response = await axios.get(`/availability/${date}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { availability: response.data };
  } catch (error: any) {
    return {
      error: error?.response?.data?.message || error.message,
      availability: [],
    };
  }
}
