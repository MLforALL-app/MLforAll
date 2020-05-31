import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Dashboard from "./components/dashboard/dashboard";
import MyProjects from "./components/dashboard/myprojects";
import ProjectDetails from "./components/projects/projectdetails/projectdetails";
import SignIn from "./components/auth/Signin";
import CreateProjectContainer from "./components/projects/newProject/newprojectpage.js";
import JoeLand from "./components/info/joeLand";
import BuildProject from "./components/projects/newProject/buildproject"

// import Footer from "./components/info/footer";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/me/:uid" component={MyProjects} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/project/:id" component={ProjectDetails} />
					<Route path="/edit/:id" component={BuildProject} />
					<Route path="/signin" component={SignIn} />
					<Route path="/create" component={CreateProjectContainer} />
					<Route exact path="/" component={JoeLand} />
				</Switch>
				{/*<Footer />*/}
			</div>
		</BrowserRouter>
	);
}

export default App;
