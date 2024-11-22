import { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

const EditReviewForm = (props) => {
  const [review, setReview] = useState({
    //Sets the intial state of the book to an empty object.
    book: props.bookId,
    user_Id: props.user,
    rating: "",
    review: "",
  });

  useEffect(() => {
    //Checks to see if there is a current review for the book, and sets that review in the form.
    if (props.currentReview) {
      setReview(props.currentReview);
    }
  }, [props.currentReview]); //I think this will also just preopulate the data as before, but I'm not positive. Ask Jake what it does, and test. May need to be an empty array?

  const handleChange = (e) => {
    const { name, value } = e.target; //Grabs the "name" from each input field below and returns the value. Does anything need to be changed relative to the referncing the books below?
    setReview({ ...review, [name]: value }); //creates a copy of the review object in state, and sets the review with inputted values from below.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (props.currentReview) {
        await axios.put(`${BASE_URL}/${props.currentReview._id}`, review);
      } else {
        await axios.post(`${BASE_URL}`, review);
      }
      props.onSave();
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
