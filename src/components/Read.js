import { useEffect, useState } from 'react'; //imports useEffect from react
import Book from "./Book"; //imports Books function
import axios from 'axios'; //imports axious


function Read() {
    //JSSON brought into read.js and will hold a dataset
    const [data, setData] = useState([]);

    useEffect(() => {
        //api link https://jsonblob.com/api/jsonblob/1161593332966481920
        axios.get('http://localhost:4000/api/books') //takes from server.js
            .then(
                (response) => {
                    setData(response.data); //call back when callback is completed this funtion will get completed if no error will send a response
                }
            )
            .catch(
                (error) => {
                    console.log(error); //if an error occurs
                }
            );
    }, []);

    //everything betweeen { } is objects in jason
    //everything betweeen ( ) is Array in jason
    return (<div>
        <h3>"Hello from Read"</h3>
        <Book myBooks={data}></Book> {/*Sends data to the child componant of book.js*/}
    </div>)
}


//export the Read conponent
export default Read;