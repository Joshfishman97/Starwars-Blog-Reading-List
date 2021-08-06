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
		<div>
			<h1>{details !== null ? details.properties.name : null}</h1>
		</div>
	);
}
