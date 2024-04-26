import axios from "axios";

export const baseURL = "https://papertown-api.onrender.com";

export const createPrompt = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/api/prompts/create`, data, {
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
