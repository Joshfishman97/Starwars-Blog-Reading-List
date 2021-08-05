import React, { useState, useEffect } from "react";

export function Vehicles() {
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles")
			.then(res => res.json())
			.then(data => setVehicles(data.results))
			.catch(err => console.log(err));
	}, []);

	return (
		<div className="row">
			{vehicles.map((item, index) => {
				return (
					<div key={index} className="card col-3" style={{ width: "16rem" }}>
						<img className="card-img-top" src=".../100px180/" alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text" />
							<a href={"/vehicles/" + item.uid} className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				);
			})}
			<h1>Vehicles Page</h1>
		</div>
	);
}
