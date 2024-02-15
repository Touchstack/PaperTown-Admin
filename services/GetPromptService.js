import axios from "axios"; 

export const baseURL = "https://papertown.onrender.com";

export const getAllPrompt = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/prompts`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res;
    } catch (err) {
      console.error("Error getting all propmt:", err);
      return err;
    }
  };