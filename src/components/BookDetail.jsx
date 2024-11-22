import { useParams } from "react-router-dom";
import ReviewList from "./ReviewList";
import CreateReviewForm from "./CreateReviewForm";

const BookDetail = (props) => {
  const { bookId } = useParams();
  
  if (!props.bookList) {
    return <h1>No book details found.</h1>;
  }
  let book = props.bookList.filter((book) => book._id === bookId);
  book = book[0];
  return (
    <>
      <div>
        <img src={book.bookImg} alt={book.bookName} className="bookImage" />
        <h1 id="title">{book.bookName}</h1>
        {/* <h2 id="author">{props..authorName}</h2>
            <h2 id="publisher">{props..publisherName}</h2>
            <h2 id="genre">{props..genre}</h2>
            <h3 id="isbn">{props..isbnString}</h3>
            <h3 id="create">Added to database {props..createdAt}</h3> */}
        {props.user ? (
          <CreateReviewForm bookId={bookId} user={props.user} />
        ) : (
          <button>Sigin to Leave Reviews</button>
        )}
        <ReviewList bookId={bookId} user={props.user} />
      </div>
    </>
  );
};

export default BookDetail;
