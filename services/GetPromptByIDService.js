import axios from "axios";

export const baseURL = "https://papertown-api.onrender.com";

export const getPromptById = async (id) => {
  try {
    const res = await axios.get(`${baseURL}/api/prompts/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error reading prompt:", err);
    return err;
  }
};
