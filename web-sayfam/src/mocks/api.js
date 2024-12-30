import axios from "axios";


export const useApi = () => {
  const postToApi = async (data) => {
    try {
      const response = await axios.post("https://reqres.in/api/workintech", data);
      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error posting to API:", error);
      throw error;
    }
  };

  return { postToApi };
};
