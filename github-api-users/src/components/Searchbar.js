import React from "react";
import "../App.css"

const Searchbar = (props) => {
	return (

		<div className="navbar">
			<h1 className="navbar-logo"><i class="fab fa-github"></i> Gitttttty hub </h1>
			<div className="search-container">
				<input className="search" type="text" placeholder="search for a user" />
				<button className="search-button">search</button>
			</div>
		</div>

	)
}

export default Searchbar;