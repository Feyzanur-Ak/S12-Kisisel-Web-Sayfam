import axios from "axios";

{/* API'den veri alma ve gönderme islemleri-REACT HOOK*/}
export const useApi = () => {
  const postToApi = async (data) => { 
    {/* data API ye gönderilecek olan kullanıcı verisini temsil etmektedir.*/}
    try {
      const response = await axios.post("https://reqres.in/api/workintech", data);
      console.log("API Response:", response.data); 
      {/* response.data API'den dönen yanıtı temsil etmektedir*/}
      return response.data;
    } catch (error) {
      console.error("Error posting to API:", error);
      throw error;
    }
  };

  return { postToApi };
};
