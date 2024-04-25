import axios, { AxiosResponse } from "axios";

const API_URL = "https://5302-110-235-234-50.ngrok-free.app/api/";


export interface ICourseData {
  _id:string;
  name: string;
  about: string;
  validity: string;
  eligibility: string;
  weekdays_batch: string;
  weekends_batch: string;
  course_details: string;
  img : File ;
}

export const submitCourse = async (formData: FormData): Promise<void> => {
  if (typeof document !== 'undefined') {
    // Code that uses document or other browser APIs
 
  
  try {
    const response: AxiosResponse<void> = await axios.post(
      `${API_URL}/course`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Course submitted successfully:", response);
  } catch (error: any) {
    throw new Error(`Error submitting Course: ${error.message}`);
  }
}
};

export const getCourse = async (_id: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${API_URL}/courses/${_id}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching Course: ${error.message}`);
  }
};
export const updateCourse = async (courseId: string, formData: FormData): Promise<void> => {
  try {
    const response: AxiosResponse<void> = await axios.put(
      `${API_URL}/course/${courseId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Course updated successfully:", response);
  } catch (error: any) {
    throw new Error(`Error updating Course: ${error.message}`);
  }
};
export const deleteCourse = async (courseId: string): Promise<void> => {
  try {
    const response: AxiosResponse<void> = await axios.delete(
      `${API_URL}/courses/${courseId}`
    );
    console.log("Course deleted successfully:", response);
  } catch (error: any) {
    throw new Error(`Error deleting Course: ${error.message}`);
  }
};

export const getAllCourses = async (): Promise<any> => {
  if (typeof document !== 'undefined') {
    // Code that uses document or other browser APIs
  
  
  try {
    const response: AxiosResponse<any> = await axios.get(`${API_URL}/courses`);
    console.log(response);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching all Courses: ${error.message}`);
  }
}


};
