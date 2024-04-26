import axios from "axios";

export const baseURL = "https://papertown-api.onrender.com";

export const deletePrompt = async (id) => {
  try {
    const res = await axios.delete(`${baseURL}/prompts/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.error("Error deleting propmt:", err);
    return err;
  }
};
