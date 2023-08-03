import React from "react";
import { actors } from "../data";

function Actors() {
  return (
	return (
		<div>
			<NavBar />

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
			<Switch>
				<Route exact path="/movies">
					<Movies />
				</Route>
			</Switch>
			<Switch>
				<Route exact path="/directors">
					<Directors />
				</Route>
			</Switch>
			<Switch>
				<Route exact path="/actors">
					<Actors />
				</Route>
			</Switch>
		</div>
	);
	);
}



export default Actors;
