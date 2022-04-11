import "./index.css"

import { Card } from "react-bootstrap";
const CardElement = (props) => {
	return (
		<div>
			<Card className="card_border border-0">
				<Card.Img style={{width:"100px"}} className="mx-auto" variant="top" src="./images/职业宣讲logo.png" />
				<Card.Body>
					<div className="text-center">
						<Card.Title className="card_title">{props.title}</Card.Title>
						<Card.Text className="card_text">
							
						</Card.Text>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}

export default CardElement;