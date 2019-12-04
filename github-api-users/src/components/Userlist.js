import React from "react";
import Usercard from "./Usercard";

const Userlist = (props) => {

	const { users } = props;

	return (
	<div className="user-list">
	{users.map( (user) => (
		<Usercard key={user.id} user={user} />
	))}
	</div>

	);
};

export default Userlist;