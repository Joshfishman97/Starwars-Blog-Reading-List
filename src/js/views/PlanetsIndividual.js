import React from "react";
import { useParams } from "react-router-dom";
export function PlanetsIndividual() {
	const params = useParams();
	return (
		<div>
			<h1>
				Planets Individual
				{params.id}
			</h1>
		</div>
	);
}
