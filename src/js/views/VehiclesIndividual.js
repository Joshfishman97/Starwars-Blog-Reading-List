import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export function VehiclesIndividual() {
	const params = useParams();

	const [details, setDetails] = useState(null);
	useEffect(
		() => {
			fetch(`https://www.swapi.tech/api/vehicles/${params.id}`)
				.then(res => res.json())
				.then(data => setDetails(data.result))
				.catch(err => console.log(err));
		},
		[params.id]
	);

	return (
		<div>
			<h1>{details !== null ? details.properties.model : null}</h1>
		</div>
	);
}
