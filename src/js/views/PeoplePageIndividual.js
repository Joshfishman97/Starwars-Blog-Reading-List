import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function PeoplePageIndividual() {
	const [details, setDetails] = useState(null);
	const params = useParams();
	useEffect(
		() => {
			fetch(`https://www.swapi.tech/api/people/${params.id}`)
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
									<p>Height: {details !== null ? details.properties.height : null} CM</p>
									<p>Mass: {details !== null ? details.properties.mass : null} KG</p>
									<p>Hair Color :{details !== null ? details.properties.hair_color : null}</p>
								</div>

								<div className="col-6">
									<p>Eye Color: {details !== null ? details.properties.eye_color : null}</p>
									<p>Gender: {details !== null ? details.properties.gender : null}</p>
									<p>Birth Year: {details !== null ? details.properties.birth_year : null}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
