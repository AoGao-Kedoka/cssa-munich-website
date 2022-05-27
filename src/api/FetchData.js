import { useState, useEffect } from "react";

const useFetch = (rootUrl, type) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				var res = await fetch(rootUrl + "/api/events?filters[EventType][$eq]="+ type + '&populate=MainImage');
				if (type === "")
					res = await fetch(rootUrl);
				const json = await res.json();
				setData(json);
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		}

		fetchData();
	}, [rootUrl, type])
	return { loading, error, data };
}

export default useFetch;
