import { useState, useEffect } from "react";

const useFetch = ( eventType) => {
	const[data, setData] = useState(null);
	const[error, setError] = useState(null);
	const[loading, setLoading] = useState(true);
	const url = "http://cssa-munich.de:1337/api/events?populate=MainImage"

	useEffect(() => {
		const fetchData = async() => {
			setLoading(true);
			try{
				const res = await fetch(url);
				const json = await res.json();
				//https://strapi.io/blog/deep-filtering-alpha-26
				//https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
				//TODO
				setData(json);
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		}

		fetchData();
	}, [eventType])
	return {loading, error, data};
}

export default useFetch;