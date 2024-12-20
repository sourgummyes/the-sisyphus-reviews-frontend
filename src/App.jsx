import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import SignupForm from "./components/SignupForm/SignupForm";
import SigninForm from "./components/SigninForm/SigninForm";
import * as authService from "../src/services/authService";
import BookList from "./components/BookList.jsx";
import * as bookService from "../src/services/bookService.js";
import ReviewList from "./components/ReviewList.jsx";
import * as reviewService from "../src/services/reviewService.js";
import BookDetail from "./components/BookDetail.jsx";

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [bookList, setBookList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await bookService.index();

        if (books.error) {
          throw new Error(books.error);
        }

        setBookList(books);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  return (
    <>
      <NavBar user={user} handleSignout={handleSignout} />
      <Routes>
        {user ? (
          <Route
            path="/"
            element={<Dashboard user={user} bookList={bookList} />}
          />
        ) : (
          <Route path="/" element={<Landing bookList={bookList} />} />
        )}
        <Route path="/signup" element={<SignupForm setUser={setUser} />} />
        <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        <Route
          path="/books/:bookId"
          element={<BookDetail bookList={bookList} user={user} />}
        />
      </Routes>
    </>
  );
};

export default App;
