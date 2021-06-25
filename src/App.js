import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import tv from "./statics/images/TV.png"
import {Tech} from "./Tech";

class App extends React.Component{
  render() {
  return (
  	<div>
		<Router>
			<div className="ui secondary menu">
				<Link className="item" to="/home">
					<img src={tv} alt="Logo"/>
				</Link>
				<Link className="item" to="/blog/">博客</Link>
				<Link className="item" to="/tech">科技</Link>
				<Link className="item" to="/about">关于</Link>
			
			</div>
			<div className="ui divider"/>
			<Switch>
				<Route path="/tech">
					<Tech/>
				</Route>
			</Switch>
		</Router>
	</div>
	 
  )
  }
  
}

export default App;
