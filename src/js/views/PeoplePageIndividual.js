import React from "react";
import { useParams } from "react-router-dom";

export function PeoplePageIndividual() {
	const params = useParams();
	return (
		<div>
			<h1>
				People Individual
				{params.id}
			</h1>
		</div>
	);
}
