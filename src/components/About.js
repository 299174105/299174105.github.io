import React from "react";
import { Image, Card, Icon} from "semantic-ui-react";
import "./about.css"
import {Link} from "react-router-dom";
export class About extends React.Component {
	render() {
		return (
				<div className="about">
				<Card>
					<Image src='/images/matthew.png' wrapped ui={false} />
					<Card.Content>
						<Card.Header>Matthew</Card.Header>
						<Card.Meta>
							<span className='date'>Joined in 2015</span>
						</Card.Meta>
						<Card.Description>
							Matthew is a musician living in Nashville.
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<Link to="/home">
							<Icon name='user' />
							22 Friends
						</Link>
					</Card.Content>
				</Card>
				</div>
			
		)
	}
}
