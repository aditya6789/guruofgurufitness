// api/courseApi.ts
import axios from "axios";

const API_URL = "https://5302-110-235-234-50.ngrok-free.app/api/";

interface ILandingData {
  video_link: string;
  paragraph: string;
  story_keypoints: Array<String>;
  story_paragraph: string;
  industury_keypoints: Array<String>;
}

export const sumbitLanding = async (formData: ILandingData) => {
  try {
    const response = await axios.post(`${API_URL}/landing`, formData);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error submitting Course: ${error.message}`);
  }
};

export const updateLanding = async (
  landingId: string,
  formData: ILandingData
) => {
  try {
    const response = await axios.put(
      `${API_URL}/landing/${landingId}`,
      formData
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Error updating Landing: ${error.message}`);
  }
};
