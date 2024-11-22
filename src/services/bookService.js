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

const create = async (formData) => {
  try {
    const res = await axios.post(BASE_URL, formData);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const updateBook = async (formData, bookId) => {
  try {
    const res = await axios.put(`${BASE_URL}/${bookId}`, formData);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const deleteBook = async (bookId) => {
  try {
    const deletedBook = await axios.delete(`${BASE_URL}/${bookId}`);
    console.log(deletedBook.data);
    return deletedBook.data;
  } catch (err) {
    console.log(err);
  }
};

export { index, create, getBookById, updateBook, deleteBook };
