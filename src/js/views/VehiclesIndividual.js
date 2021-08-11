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
		<div className="container-fluid">
			<div className="row">
				<div className="col-6 mx-auto border px-0">
					<div className="row">
						<div className="col-6">
							<img className="w-100" src="http://via.placeholder.com/640x360" alt="Card image cap" />
						</div>
						<div className="col-6">
							<h1 className="text-center">{details !== null ? details.properties.model : null}</h1>
							<div className="row">
								<div className="col-6">
									<p>Vehicle Class: {details !== null ? details.properties.vehicle_class : null}</p>
									<p>Manufacturer: {details !== null ? details.properties.manufacturer : null}</p>
									<p>Cost: {details !== null ? details.properties.cost_in_credits : null}</p>
									<p>Length: {details !== null ? details.properties.length : null}</p>
									<p>Crew Size: {details !== null ? details.properties.crew : null}</p>
									<p>
										Number of Passengers: {details !== null ? details.properties.passengers : null}
									</p>
								</div>

								<div className="col-6">
									<p>Speed: {details !== null ? details.properties.max_atmosphering_speed : null}</p>
									<p>Cargp Capacity: {details !== null ? details.properties.cargo_capacity : null}</p>
									<p>Consumables: {details !== null ? details.properties.consumables : null}</p>
									<p>Films: {details !== null ? details.properties.films : null}</p>
									<p>
										Notable Pilots:
										{details !== null ? details.properties.pilots : null}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
