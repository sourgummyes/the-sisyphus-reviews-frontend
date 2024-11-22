import { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/reviews`;

const EditReviewForm = (props) => {
  const [review, setReview] = useState({
    book: props.bookId,
    user_Id: props.user,
    rating: "",
    review: "",
  });

  useEffect(() => {
    if (props.currentReview) {
      setReview(props.currentReview);
    }
  }, [props.currentReview]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${BASE_URL}/${props.currentReview._id}`, review);
      props.getReviews();
      props.setShowEditForm(false);
    } catch (error) {
      console.error("Error saving review:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating:{" "}
        <input
          type="text"
          name="rating"
          value={review.rating}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Review:{" "}
        <input
          type="text"
          name="review"
          value={review.review}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Save Review</button>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditReviewForm;
