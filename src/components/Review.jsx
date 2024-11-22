import { useState } from "react";
import EditReviewForm from "./EditReviewForm";
import * as reviewService from "../services/reviewService.js";

const Review = ({ review, user, getReviews }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = async (review) => {
    await reviewService.deleteReview(review);
    getReviews();
  };

  if (user && user._id === review.user_Id._id) {
    return (
      <li key={review._id}>
        <p>
          <strong>{review.user_Id.username}</strong>: {review.review}
        </p>
        <p>Rating: {review.rating}</p>
        {showEditForm ? (
          <EditReviewForm
            currentReview={review}
            setShowEditForm={setShowEditForm}
            getReviews={getReviews}
          />
        ) : (
          <button onClick={() => setShowEditForm(true)}>Edit</button>
        )}
        <button onClick={() => handleDelete(review._id)}>Delete</button>
      </li>
    );
  } else {
    return (
      <li key={review._id}>
        <p>
          <strong>{review.user_Id.username}</strong>: {review.review}
        </p>
        <p>Rating: {review.rating}</p>
      </li>
    );
  }
};
export default Review;
