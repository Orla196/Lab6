import BookItems from "./bookItems"; //import books


function Book(props) {
    return props.myBooks.map(
        (book) => {
            return <BookItems mybook={book} key={book.isbn}></BookItems> //returns bookItems with book inside
        }
    );

}
//Exports book functions
export default Book;