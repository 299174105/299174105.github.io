import React from "react";
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import {Tech} from "./Tech";
import {About} from "./About";
import {Menu} from "semantic-ui-react";
import "./app.css"
import {Home} from "./Home";

class App extends React.Component{
  render() {
  return (
  	<div>
		<Router>
			
			<div className="my-nav-bar">
				<Menu pointing secondary>
					<Menu.Item
						name='主页'
						as = {Link} to="/home"
					/>
					<Menu.Item
						name='技术'
						as = {Link} to="/tech"
					/>
					<Menu.Item
						name='博客'
						as = {Link} to="/blog"
					/>
					<Menu.Menu position='right'>
						<Menu.Item
							name='关于'
							as = {Link} to="/about"
						/>
					</Menu.Menu>
				</Menu>
			</div>
			<div className="my-container">
				<Switch>
					<Route path="/home">
						<Home/>
					</Route>
					<Route path="/tech">
						<Tech/>
					</Route>
					<Route  path="/about"><About/></Route>
				</Switch>
			</div>
			
		</Router>
	</div>
	 
  )
  }
  
}

export default App;
