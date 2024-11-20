const ReviewList = (props) => {
    const pets = props.reviewList.map((review) => (
        <a key={review._id} onClick={ () => props.updateSelected(review) }>
            <li key={review._id}>{review.name}</li>
        </a>
    ))
    
    return (
      <div>
        <h1>Individual Reviews</h1>
        {!props.reviewList.length ? <h2>No Reviews Yet!</h2> : <ul>{ reviews }</ul>}

      <button onClick={props.handleFormView}>
        { props.isFormOpen ? 'Close Form' : 'New Review' }
      </button>

      </div>
    )
  }
  
  export default ReviewList;