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
		<div className="container-fluid">
			<div className="row">
				<div className="col-6 mx-auto border px-0">
					<div className="row">
						<div className="col-6">
							<img className="w-100" src="http://via.placeholder.com/640x360" alt="Card image cap" />
						</div>
						<div className="col-6">
							<h1 className="text-center">{details !== null ? details.properties.name : null}</h1>
							<div className="row">
								<div className="col-6">
									<p>diameter: {details !== null ? details.properties.diameter : null}</p>
									<p>
										Rotation Period: {details !== null ? details.properties.rotation_period : null}{" "}
										Days
									</p>

									<p>Gravity: {details !== null ? details.properties.gravity : null}</p>
									<p>Population: {details !== null ? details.properties.population : null}</p>
								</div>

								<div className="col-6">
									<p>Climate: {details !== null ? details.properties.climate : null}</p>
									<p>
										Orbital Peroid: {details !== null ? details.properties.orbital_period : null}{" "}
										Days{" "}
									</p>
									<p>Terrain: {details !== null ? details.properties.terrain : null}</p>
									<p>Surface Water: {details !== null ? details.properties.surface_water : null}</p>
									<p />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
