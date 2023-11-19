import { useState } from "react"; //Imports useState from react
import axios from "axios";

function Create() {

    //use state to manage 3 variables
    const [title, setTitle] = useState(''); //set title
    const [author, setAuthor] = useState(''); //set Author
    const [cover, setCover] = useState(''); //set cover

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Title: "+title+"\nAuthor: "+author+"\nCover: "+cover);
const book ={
    title:title,
    autor:author,
    cover:cover
};
        
   
    axios.post('http://localhost:4000/api/books',book)
    .then()
    .catch();
 };

    return (
        <div>
            <h3>"Hello from create"</h3>
            {/*Form for uploading a book*/}
            <form onSubmit={handleSubmit}>{/*handleSubmit will envolk when button pressed*/}
                <div className="form-group"> {/*Form group for uploading a book title*/}
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group"> {/*Form group for uploading a book author*/}
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div className="form-group"> {/*Form group for uploading a book cover*/}
                    <label>Add Book cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                
                <div>{/*handleSubmit button*/}
                    <input
                        type="submit"
                        value="Insert Book">
                    </input>
                </div>
            </form>
        </div>
    );
}

export default Create; //export the create conponent