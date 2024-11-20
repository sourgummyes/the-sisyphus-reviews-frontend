import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/books`;

const index = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getBookById = async (bookId) => {
  try {
    const res = await axios.get(BASE_URL / `${bookId}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

//Specify by ID--create get route

export { index, getBookById };
