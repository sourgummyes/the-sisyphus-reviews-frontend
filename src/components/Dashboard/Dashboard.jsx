import BookList from "../BookList";

const Dashboard = ({ user, bookList }) => {
  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        This is the dashboard page where you, and only you, can see a dashboard
        of all your things.
      </p>
      <BookList bookList={bookList} />
    </main>
  );
};

export default Dashboard;
