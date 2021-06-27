import React from "react";
import {Link} from "react-router-dom";

export class BlogList extends React.Component {
	render() {
		return (<div>
			<ul>
			<li><Link to="/blog/1">docker-redis</Link></li>
			<li><Link to="/blog/2">docker-rabbitMQ</Link></li>
			</ul>
		</div>);
	}
}
