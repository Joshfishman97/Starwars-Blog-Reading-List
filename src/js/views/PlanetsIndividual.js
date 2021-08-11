import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export function PlanetsIndividual() {
	const params = useParams();
	const [details, setDetails] = useState(null);
	useEffect(
		() => {
			fetch(`https://www.swapi.tech/api/planets/${params.id}`)
				.then(res => res.json())
				.then(data => setDetails(data.result))
				.catch(err => console.log(err));
		},
		[params.id]
	);
	return (
		<div>
			<h1 className="text-center">{details !== null ? details.properties.name : null}</h1>
			<h1>{details !== null ? details.properties.diameter : null}</h1>
			<h1>{details !== null ? details.properties.rotation_period : null}</h1>
			<h1>{details !== null ? details.properties.orbital_period : null}</h1>
			<h1>{details !== null ? details.properties.gravity : null}</h1>
			<h1>{details !== null ? details.properties.population : null}</h1>
			<h1>{details !== null ? details.properties.climate : null}</h1>
			<h1>{details !== null ? details.properties.rotation_period : null}</h1>
			<h1>{details !== null ? details.properties.terrain : null}</h1>
			<h1>{details !== null ? details.properties.surface_water : null}</h1>
		</div>
	);
}
