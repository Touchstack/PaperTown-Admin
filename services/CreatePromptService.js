import axios from "axios"; 

export const baseURL = "https://papertown.onrender.com";

export const createPrompt = async () => {
    try {
      const res = await axios.post(`${baseURL}/api/prompts/create`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res;
    } catch (err) {
      console.error("Error creating propmt:", err);
      return err;
    }
  };