import axios from "axios"; 

export const baseURL = "https://papertown.onrender.com";

export const deletePrompt = async (id) => {
    try {
      const res = await axios.delete(`${baseURL}/api/prompt/${id}`, {
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