import React from 'react';
import Userlist from "./components/Userlist";
import Searchbar from "./components/Searchbar";
import './App.css';
import axios from "axios";

class App extends React.Component {

  state = {
    users: [],
  }

  componentDidMount() {
    console.log("tl: App.js: componentsDidMount did mount");
    if(!window.localStorage.getItem("users")) {
      this.API();
    } else {
      console.log("using data from localStorage");
      this.setState( {users: JSON.parse(window.localStorage.getItem("users")) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState !== this.state.users) {
      window.localStorage.setItem("users", JSON.stringify(this.state.users));
    } else {
      console.log("component didn't need to update");
    }
  }

  API() {
    axios.get("https://api.github.com/users?page=1&per_page=5")
         .then( (response) => {
          //console.log(response.data)
          this.setState({users: response.data})
         })
         .catch( (error) => {
          console.log("Error in App.js: API ", error)
         })
  }

  render() {
    console.log("tl: App.js: render")
    return (
      <>
        <Searchbar/>
        <div className="App">
          <h1>Github users</h1>
          <Userlist users={this.state.users}/>
        </div>
      </>
    );
  }
}

export default App;
