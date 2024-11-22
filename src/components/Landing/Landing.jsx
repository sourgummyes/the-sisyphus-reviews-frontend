//Contents of this page will need to be altered relative to our actual page, not totally sure that we need it? For now I just lifted the boiler plate from the react-jwt-auth-template.
import BookList from "../BookList";

const Landing = (props) => {
  return (
    <main>
      <h1>Hello, you are on the landing page for visitors.</h1>
      <h3>
        If you sign up for a new account, you will have the ability to sign in
        and add, update, and delte reviews for books.
      </h3>
      <BookList bookList={props.bookList} />
    </main>
  );
};

export default Landing;
