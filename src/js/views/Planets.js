import React, { useState, useEffect, useContext } from "react";
import { FavoriteContext } from "./FavoriteList";
export function Planets() {
	const favorites = useContext(FavoriteContext);
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets")
			.then(res => res.json())
			.then(data => setPlanets(data.results))
			.catch(err => console.log(err));
	}, []);

	return (
		<div>
			<h1 className="col-12">Planets Page</h1>
			<div className="container-flex horizontal-row">
				<div className="row">
					{planets.map((item, index) => {
						return (
							<div key={index} className="card col-4 " style={{ width: "16rem" }}>
								<img className="card-img-top" src=".../100px180/" alt="Card image cap" />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text" />
									<a href={"/planets/" + item.uid} className="btn btn-primary">
										Go somewhere
									</a>
									{favorites.favoriteArray.includes(item.name) ? (
										<button
											className="btn btn-outline-primary"
											onClick={() => {
												const newArray = favorites.favoriteArray;

												favorites.setFavoriteArray(newArray.filter(fav => fav !== item.name));
											}}>
											Delete Favorite
										</button>
									) : (
										<button
											className="btn btn-primary"
											onClick={() => {
												favorites.setFavoriteArray([...favorites.favoriteArray, item.name]);
											}}>
											Favorite
										</button>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
