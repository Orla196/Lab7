import Card from 'react-bootstrap/Card';
// BookItem component takes a book object as a prop
function BookItems(props) {
    return (
        <div>{/*Takes a card from bootstrap and styles the cards*/}
            <Card>
                <Card.Header>{props.mybook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.mybook.cover}></img>
                        <footer>
                            {props.mybook.author}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}
//export the BookItems conponent
export default BookItems;