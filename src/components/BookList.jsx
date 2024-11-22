import { Link } from "react-router-dom";

const BookList = (props) => {
  if (!props.bookList) {
    return <h1>Book not found...</h1>;
  } else {
    return (
      <>
        <h2>Books</h2>
        <ul>
          {props.bookList.map((currentBook) => (
            <li key={currentBook._id}>
              <Link to={`/books/${currentBook._id}`}>
                {currentBook.bookName}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default BookList;

// {`/books/${currentBook._id}`}
