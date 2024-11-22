import EditReviewForm from "./EditReviewForm";

const Review = ({review}) => {
  
  return (
    <li key={review._id}>
  <p>
    <strong>{review.user_Id.username}</strong>: {review.review}
  </p>
  <p>Rating: {review.rating}</p>
  {showEditForm ? (
    <EditReviewForm />
  ) : (
    <button onClick={() => setShowEditForm(true)}>Edit</button>
  )}
  <button>Delete</button>
    </li>
  )
}


export default Review;