import axios from "axios";

export const baseURL = "https://papertown-api.onrender.com";

export const getPromptByCategoryId = async (id) => {
  try {
    const res = await axios.get(`${baseURL}/api/filter/${id}`, {
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
