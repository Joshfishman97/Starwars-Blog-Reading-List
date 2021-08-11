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
			<h1 className="text-center"> Model: {details !== null ? details.properties.model : null}</h1>
			<h1>Vehicle Class: {details !== null ? details.properties.vehicle_class : null}</h1>
			<h1>Manufacturer: {details !== null ? details.properties.manufacturer : null}</h1>
			<h1>{details !== null ? details.properties.orbital_period : null}</h1>
			<h1>{details !== null ? details.properties.cost_in_credits : null}</h1>
			<h1>{details !== null ? details.properties.length : null}</h1>
			<h1>{details !== null ? details.properties.crew : null}</h1>
			<h1>{details !== null ? details.properties.passengers : null}</h1>
			<h1>{details !== null ? details.properties.max_atmosphering_speed : null}</h1>
			<h1>{details !== null ? details.properties.cargo_capacity : null}</h1>
			<h1>{details !== null ? details.properties.consumables : null}</h1>
			<h1>{details !== null ? details.properties.films : null}</h1>
			<h1>{details !== null ? details.properties.pilots : null}</h1>
			<img className="w-100" src="http://via.placeholder.com/640x360" alt="Card image cap" />
		</div>
	);
}
