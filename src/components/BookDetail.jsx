const BookDetail = (props) => {
    if(!prop.selected){
        return(
            <h1>No book details found.</h1>
        )
    }
    return (
        <>
        <div>
            <img src={props.selected.bookImg} alt={props.selected.bookName} />
            <h1 id="title">{props.selected.bookName}</h1>
            <h2 id="author">{props.selected.authorName}</h2>
            <h2 id="publisher">{props.selected.publisherName}</h2>
            <h2 id="genre">{props.selected.genre}</h2>
            <h3 id="isbn">{props.selected.isbnString}</h3>
            <h3 id="create">Added to database {props.selected.createdAt}</h3>
        </div>
        </>
    )
}

export default BookDetail;