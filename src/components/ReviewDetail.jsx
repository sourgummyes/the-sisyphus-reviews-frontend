const ReviewDetails = (props) => {
    if (!props.selected)
        return (
            <div>
                <h1>NO REVIEW DETAILS</h1>
            </div>
        );

        return (
            <div>
                <h1>{props.selected.book}</h1>
                <h2>{props.selected.rating}</h2>
                <h2>Age: {props.selected.age} year{props.selected.age > 1 ? 's' : ''} old</h2>
                <div>
                <button onClick={() => props.handleFormView(props.selected)}>Edit Review</button>
                <button onClick={() => props.handleRemoveReview(props.selected._id)}>Delete Review</button>
            </div>
        </div>
        )
    };

export default ReviewDetails;