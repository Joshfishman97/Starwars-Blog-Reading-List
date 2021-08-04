import React, { useState, useEffect } from "react";

export function PeoplePage() {
	const [people, setPeople] = useState([]);

	useEffect(() => {}, []);
	fetch("https://www.swapi.tech/api/people")
		.then(res => res.json())
		.then(data => setPeople(data.result))
		.catch(err => console.log(err));
	return (
		<div>
			<h1>People Page</h1>
		</div>
	);
}
