import axios from "axios";

const API_URL = "https://5302-110-235-234-50.ngrok-free.app/api/";

interface IUserUpdateData {
  userId: string;
  full_name?: string;
  email?: string;

}

export const updateUser = async (userData: IUserUpdateData) => {
  try {
    // Destructure the userId from userData object
    const { userId, ...updateData } = userData;

    // Send a PUT request to update user information
    const response = await axios.put(`${API_URL}/users/${userId}`, updateData);
    return response.data;
  } catch (error: any) {
    // Handle errors
    if (error.response) {
      console.error(
        "Server responded with error status:",
        error.response.status
      );
      console.error("Error response data:", error.response.data);
    } else if (error.request) {
      console.error("No response received from the server");
    } else {
      console.error("Error setting up the request:", error.message);
    }
    throw new Error(`Error updating user: ${error.message}`);
  }
};
export const getAllUsers = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a non-2xx status code
      console.error(
        "Server responded with error status:",
        error.response.status
      );
      console.error("Error response data:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received from the server");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up the request:", error.message);
    }
    throw new Error(`Error fetching all users: ${error.message}`);
  }
};

