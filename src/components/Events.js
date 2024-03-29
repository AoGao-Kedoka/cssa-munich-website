import "./Events.css"
import useFetch from "../api/FetchData";
import {Link} from 'react-router-dom';

const Events = (props) => {
	const rootUrl = "http://cssa-munich.de:1337";
	const { loading, error, data } = useFetch(rootUrl, props.type);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;
	return (
		<dir style={{ paddingTop: "100px" }}>
			{data.data.map(cssaEvents => (
				<div key={cssaEvents.id} className="mx-auto" style={{width:"50%"}}>
					<div className="card border-0 event-card">
						<div className="card-horizontal">
							<div className="img-square-wrapper">
								<img 
									src={rootUrl + cssaEvents.attributes.MainImage.data.attributes.url} 
									alt={cssaEvents.id}
									width="300px"
									height="200px"
									style={{borderRadius:40}}
								/>
							</div>
								<div className="card-body">
									<a href={`${cssaEvents.id}`} className="link-event">
										<h3 className="card-title">{cssaEvents.attributes.Title}</h3>
										<p className="card-text">{cssaEvents.attributes.Date}</p>
									</a>
								</div>
						</div>
					</div>

				</div>
			))}
		</dir>
	);
}

export default Events;
