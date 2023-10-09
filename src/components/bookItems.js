import Card from 'react-bootstrap/Card';

function BookItems(props) {
    return (
        <div>{/*Takes a card from bootstrap and styles the cards*/}
            <Card>
                <Card.Header>{props.mybook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.mybook.thumbnailUrl}></img>
                        <footer>
                            {props.mybook.authors[0]}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}
//export the BookItems conponent
export default BookItems;