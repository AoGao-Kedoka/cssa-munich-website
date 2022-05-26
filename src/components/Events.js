import "./Events.css"
import useFetch from "../api/FetchData";
import { Card } from "react-bootstrap";

const Events = (props) => {
	const rootUrl = "http://cssa-munich.de:1337";
	const { loading, error, data } = useFetch(rootUrl, props.type);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;
	
	return (
		<dir style={{paddingTop:"100px"}}>
			{data.data.map(cssaEvents => (
				<div key={cssaEvents.id}>
					<Card className="event-card">
						<Card.Img className="img-card" src={rootUrl + cssaEvents.attributes.MainImage.data.attributes.url} />
						<Card.Body>
							<Card.Title>{cssaEvents.attributes.Title}</Card.Title>
							<Card.Text>
								{cssaEvents.attributes.Date}
							</Card.Text>
						</Card.Body>
						</Card>
				</div>
			))}
		</dir>
	);
}

export default Events;
