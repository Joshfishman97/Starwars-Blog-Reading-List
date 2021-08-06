import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { PeoplePage } from "./views/PeoplePage";
import { PeoplePageIndividual } from "./views/PeoplePageIndividual";
import { Vehicles } from "./views/Vehicles";
import { VehiclesIndividual } from "./views/VehiclesIndividual";
import { Planets } from "./views/Planets";
import { PlanetsIndividual } from "./views/PlanetsIndividual";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<PeoplePage />
							<Vehicles />
							<Planets />
						</Route>
						<Route exact path="/people/:id">
							<PeoplePageIndividual />
						</Route>
						<Route exact path="/vehicles/:id">
							<VehiclesIndividual />
						</Route>
						<Route exact path="/planets/:id">
							<PlanetsIndividual />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
