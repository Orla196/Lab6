import BookItems from "./bookItems";


function Book(props) {
    return props.myBooks.map(
        (book) => {
            return <BookItems mybook={book} key={book.isbn}></BookItems>
        }
    );

}
//Exports book functions
export default Book;