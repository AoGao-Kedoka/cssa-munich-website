import "./CardElement.css"

import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardElement = (props) => {

	let navigate = useNavigate();
	const routeChange = () => {
		let path = props.link;
		navigate(path);
	};

	return (
		<div>
			<Card className="border-0 card_border" style={{"border-radius": 40}} onClick={routeChange}>
				<Card.Img style={{ width: "100px" }} className="mx-auto" variant="top" src={props.logo} />
				<Card.Body>
					<div className="text-center">
						<Card.Title className="card_title">{props.title}</Card.Title>
						<Card.Text className="card_text mx-auto">
							{props.text}
						</Card.Text>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}

export default CardElement;