import { Card} from "react-bootstrap";
const CardElement = (props) => {
	return (
			<Card>
				<Card.Img variant="top" src="holder.js/100px160" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
					</Card.Text>
				</Card.Body>
			</Card>
	)
}

export default CardElement;