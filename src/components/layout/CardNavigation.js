import { CardGroup } from "react-bootstrap";
import CardElement from "../Card";

const CardNavigation = () => {
	return (
		<div>
			<CardGroup>
				<CardElement />
				<CardElement />
				<CardElement />
			</CardGroup>
			<CardGroup>
				<CardElement />
				<CardElement />
				<CardElement />
			</CardGroup>
		</div>
	);
}

export default CardNavigation;