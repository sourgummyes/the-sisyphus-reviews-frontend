import { useEffect, useState } from "react";
import axios from "axios";

const ReviewList = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/books/${props.bookId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error getting reviews:", error);
      }
    };

    getReviews();
  }, [props.bookId]);

  if (!reviews.length) {
    return <h2>No reviews found...</h2>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <p>
              <strong>{review.user_Id}</strong>: {review.review}
            </p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;