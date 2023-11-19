import BookItems from "./bookItems"; //import books


function Book(props) {
     // Maps over an array of books
    return props.myBooks.map(
        (book) => {
             // Renders a BookItems component for each book, passing the book object as a prop
            return <BookItems mybook={book} key={book._id}></BookItems> //returns bookItems with book inside
        }
    );

}
//Exports book functions
export default Book;