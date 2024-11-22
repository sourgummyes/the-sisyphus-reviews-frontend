import { useEffect, useState } from "react";
import axios from "axios";
import EditReviewForm from "./EditReviewForm";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/reviews`;

const ReviewList = (props) => {
  const [reviews, setReviews] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${props.bookId}`);
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

  return (  //Pass Review component as a prop, prop.review
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
