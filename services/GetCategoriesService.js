import axios from "axios"; 

export const baseURL = "https://papertown.onrender.com";

export const getAllCategories = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/category/read`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (err) {
      console.error("Error creating propmt:", err);
      return err;
    }
  };