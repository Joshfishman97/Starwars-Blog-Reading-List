import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions, store } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
				<div className="dropdown">
					<a
						className="btn btn-secondary dropdown-toggle"
						href="#"
						role="button"
						id="dropdownMenuLink"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Dropdown link
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
