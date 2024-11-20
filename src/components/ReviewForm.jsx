import { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewForm = (props) => {
    const [review, setReview] = useState({
        book: '',
        rating: '',
        review: ''
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
          if (props.currentReview) {
            await axios.put(`http://localhost:3000/reviews/${props.currentReview._id}`, review);
          } else {
            await axios.post('http://localhost:3000/reviews', review);
          }
          props.onSave();
        } catch (error) {
          console.error('Error saving review:', error);
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>Book: <input type="text" name="book" value={review.book} onChange={handleChange} required /></label>
          <label>Rating: <input type="text" name="rating" value={review.rating} onChange={handleChange} required /></label>
          <label>Review: <input type="text" name="review" value={review.review} onChange={handleChange} required /></label>
          <button type="submit">Save Review</button>
          <button type="button" onClick={props.onCancel}>Cancel</button>
        </form>
      );
    };
    
    export default TrackForm;