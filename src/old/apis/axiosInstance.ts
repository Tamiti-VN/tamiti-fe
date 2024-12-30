import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

// Define the base URL for the server API
const SERVER_API: string =
  import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:3000";

// Create an Axios instance with the base URL
const axiosClient: AxiosInstance = axios.create({ baseURL: SERVER_API });

// Add interceptors to handle responses
axiosClient.interceptors.response.use(
  function <T>(response: AxiosResponse<T>): T {
    // Return the response data or a custom structure
    return response.data;
  },
  function (error: AxiosError) {
    const res: Partial<AxiosResponse> = {};
    if (error.response) {
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    return res as AxiosResponse; // Cast to AxiosResponse
  },
);

export { axiosClient };
