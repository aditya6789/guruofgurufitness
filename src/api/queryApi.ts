import axios from "axios";
const API_URL = "https://5302-110-235-234-50.ngrok-free.app/api/";
interface IQueryData {
  full_name: string;
  email: string;
  mobile: string;
  your_city: string;
}

export const QueryRegister = async (userData: IQueryData): Promise<any> => {
  try {
    const response = await axios.post(`${API_URL}/query`, userData);

    return response.data;
  } catch (error: any) {
    throw new Error(`Error submitting query register: ${error.message}`);
  }
};
export const getAllQuery = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_URL}/queries`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching all queries: ${error.message}`);
  }
};
