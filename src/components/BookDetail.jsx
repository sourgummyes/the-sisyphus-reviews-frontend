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
      <div className="bookDetails">
        <img src={book.bookImg} alt={book.bookName} className="bookImage" />
        <h1 id="title">Title: {book.bookName}</h1>
        <h2 id="author">Author: {book.authorName}</h2>
        <h2 id="publisher">Publisher: {book.publisherName}</h2>
        <h2 id="genre">Genre: {book.genre}</h2>
        <h3 id="isbn">ISBN: {book.isbnString}</h3>
        {props.user ? (
          <CreateReviewForm bookId={bookId} user={props.user} />
        ) : (
          <button>Signin to Leave Reviews</button>
        )}
        <ReviewList bookId={bookId} user={props.user} />
      </div>
    </>
  );
};

export default BookDetail;
