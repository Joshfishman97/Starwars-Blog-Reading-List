import React, { useState, useEffect, useContext } from "react";
import { FavoriteContext } from "./FavoriteList";
import { Context } from "../store/appContext";
export function PeoplePage() {
	const { actions, store } = useContext(Context);
	const [people, setPeople] = useState([]);
	const favorites = useContext(FavoriteContext);
	useEffect(() => {
		fetch("https://3000-purple-hawk-jenamzjx.ws-us16.gitpod.io/people")
			.then(res => res.json())
			.then(data => setPeople(data))
			.catch(err => console.log(err));
	}, []);
	console.log(people);
	return (
		<div>
			<h1 className="col-12">People Page</h1>
			<div className="container-flex horizontal-row ">
				<div className="row ">
					{people
						? people.map((item, index) => {
								return (
									<div key={index} className="card col-4">
										<img
											className="card-img-top"
											src="http://via.placeholder.com/640x360"
											alt="Card image cap"
										/>
										<div className="card-body">
											<h5 className="card-title">{item.name}</h5>
											<p className="card-text" />
											<a href={"/people/" + item.uid} className="btn btn-primary">
												Go somewhere
											</a>
											<button className="btn" onClick={() => actions.addFavorite(item)}>
												add me
											</button>
											{favorites.favoriteArray.includes(item.name) ? (
												<button
													className="btn btn-outline-primary"
													onClick={() => {
														const newArray = favorites.favoriteArray;

														favorites.setFavoriteArray(
															newArray.filter(fav => fav !== item.name)
														);
													}}>
													Delete Favorite
												</button>
											) : (
												<button
													className="btn btn-primary"
													onClick={() => {
														favorites.setFavoriteArray([
															...favorites.favoriteArray,
															item.name
														]);
													}}>
													Favorite
												</button>
											)}
										</div>
									</div>
								);
						  })
						: "loading.."}
				</div>
			</div>
		</div>
	);
}
