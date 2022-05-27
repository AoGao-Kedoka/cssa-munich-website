import "./EventDetail.css"
import { useParams } from 'react-router-dom'
import useFetch from '../api/FetchData';
import ReactMarkdown from "react-markdown";


const EventDetails = () => {
	const { id } = useParams();
	const { loading, error, data } = useFetch("http://cssa-munich.de:1337/api/events/" + id, "");

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	return (
		<div>
			<h1 className="text-center">{data.data.attributes.Title}</h1>
			<p className="text-center">{data.data.attributes.Date}</p>
			<div className="event-detail">
				<ReactMarkdown
					transformImageUri={(uri) =>
						uri = 'http://cssa-munich.de:1337' + uri
					}>{data.data.attributes.Content}</ReactMarkdown>
			</div>
		</div>
	);
}

export default EventDetails;