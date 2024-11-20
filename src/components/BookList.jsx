import { Link } from "react-router-dom";

const BookList = (props) => {
  if (!props.books) {
    return <h1>Book not found...</h1>;
  } else {
    return (
      <>
        <h2>Books</h2>
        <ul>
          {props.books.map((currentBook) => (
            <li key={currentBook._id}>
              <Link to={`/books/${currentBook._id}`}>
                <img src={props.books.bookName} />
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default BookList;
