import React from "react";
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import {About} from "./About";
import {Grid, Menu} from "semantic-ui-react";
import "./app.css"
import {Home} from "./Home";
import {BlogList} from "./BlogList";
import Blog1 from "./Blog1";

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
					{/*<Menu.Item
						name='技术'
						as = {Link} to="/tech"
					/>*/}
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
					<Route exact  path="/about"><About/></Route>
				</Switch>
			<Grid>
				<Grid.Column width={12}>
				<Switch>
					<Route exact path={["/","/home","/blog"]}>
						<Home/>
					</Route>
					<Route path="/blog/:id" component={Blog1}  />
				</Switch>
					
					</Grid.Column>
				<Grid.Column width={4}>
				<Switch>
					<Route exact path={["/","/tech","/home","/blog/:id","/blog"]}><BlogList/></Route>
				</Switch>
					</Grid.Column>
				</Grid>
			</div>
			
			
			
			
			
			
			
			
		</Router>
	</div>
	 
  )
  }
  
}

export default App;
