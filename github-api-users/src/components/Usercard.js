import React from "react";
import axios from "axios";
import "../App.css";

class Usercard extends React.Component {

	state = {
		followers: [],
		followerCount: 0
	}


	componentDidMount() {
		//console.log("Usercard: props call:", this.props);
		if(!window.localStorage.getItem("followers") && !window.localStorage.getItem("followerCount")) {
			this.APICallForUsersFollower();
			this.APICallForFollowerCount();
		} else {
			console.log("using data from localStorage UserCard");
		}
	}

	APICallForUsersFollower() {
		axios.get(`${this.props.user.followers_url}?page=1&per_page=5`)
				 .then( (response) => {
				 	//console.log("tl: Usercard: axios: response:", response.data)
				 	this.setState({ followers: response.data });
		 		})
				 .catch( (error) => {
		 			console.log("tl: Usercard: axios: error:", error);
		 		})
	}

	APICallForFollowerCount() {
		axios.get(`https://api.github.com/users/${this.props.user.login}`)
				 .then( (response) => {
				 	//console.log("tl: Usercard axios response: followerCount:", response.data);
				 	this.setState({ followerCount: response.data.followers });
				 })
				 .catch( (error) => {
				 	console.log("tl: Usercard axios response: followerCount: error", error);
				 })
	}

	render() {
		return (
			<div className="card">
				<div className="leftside">
					<div className="profile-container">
						<i className="fas fa-crown fa-5x crooked-crown"></i>
						<img className="profile" src={this.props.user.avatar_url} alt="github user"/>
					</div>
				</div>
				<div className="rightside">
					<h4>{this.props.user.login}</h4>
					<h5>{this.state.followerCount} followers</h5>
					<h6>Some of {this.props.user.login} followers</h6>
					<div className="followers-container">
						{this.state.followers.map( (follower) => (
							<img className="followers" src={follower.avatar_url} alt="github follower" />
						))}
					</div>
				</div>
			</div>
		);
	}

};

export default Usercard;