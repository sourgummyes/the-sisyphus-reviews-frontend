import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/reviews`;

const index = async () => {
  try {
    const res = await axios.get(BASE_URL);
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

const getReviewById = async (reviewId) => {
  try {
    const res = await axios.get(BASE_URL / `${reviewId}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const updateReview = async (formData, reviewId) => {
  try {
    const res = await axios.put(`${BASE_URL}/${reviewId}`, formData);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const deleteReview = async (reviewId) => {
  try {
    const deletedReview = await axios.delete(`${BASE_URL}/${reviewId}`);
    console.log(deletedReview.data);
    return deletedReview.data;
  } catch (err) {
    console.log(err);
  }
};

export { 
  index,
  create,
  getReviewById,
  updateReview,
  deleteReview
};