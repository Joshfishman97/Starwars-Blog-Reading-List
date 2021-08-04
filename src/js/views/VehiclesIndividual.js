import React from "react";
import { useParams } from "react-router-dom";
export function VehiclesIndividual() {
	const params = useParams();
	return (
		<div>
			<h1>
				vehicles
				{params.id}
			</h1>
		</div>
	);
}
