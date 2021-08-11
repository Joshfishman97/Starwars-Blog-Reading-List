import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions, store } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						className="logo"
						src="https://compass-ssl.xboxlive.com/assets/67/1c/671c739e-386a-4df3-9774-30e9e46eb53a.jpg?n=MSXC-StarWarsTitle-HeroAndImageCard-large-l-794x447-16x9-01.jpg"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo" />
				<div className="dropdown">
					<a
						className="btn btn-secondary dropdown-toggle"
						href="#"
						role="button"
						id="dropdownMenuLink"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites
					</a>

					<ul className="dropdown-menu show" aria-labelledby="dropdownMenuLink">
						{store.favorites.map((f, i) => {
							return (
								<li key={i}>
									{f.name}{" "}
									<i className="fas fa-trash-alt" onClick={() => actions.deleteFavorite(f)} />{" "}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
