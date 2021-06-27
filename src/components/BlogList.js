import React from "react";
import {Link} from "react-router-dom";
import {Card, CardContent, CardGroup, CommentAuthor} from "semantic-ui-react";

export class BlogList extends React.Component {
	render() {
		return (<div style={{margin:"10px 20px"}}>
			<CardGroup itemsPerRow="4">
			<Card raised  as={Link} to="/blog/1">
				<Card.Content>
					<Card.Header>Dcoker-redis</Card.Header>
					<Card.Meta>accel</Card.Meta>
				<Card.Description>use redis on docker</Card.Description>
				</Card.Content>
				<CardContent extra>
					<CommentAuthor >
						redis
					</CommentAuthor>
				</CardContent>
			</Card>
			<Card raised  as={Link} to="/blog/2">
				
				<Card.Content>
					<Card.Header>Dcoker-rabbitMQ</Card.Header>
					<Card.Meta >accel</Card.Meta>
					<Card.Description>use rabbitMQ on docker</Card.Description>
				</Card.Content>
				<CardContent extra>
					<CommentAuthor >
						rabbitMQ
					</CommentAuthor>
				</CardContent>
			</Card>
			<Card as={Link} to="/blog/3">
				<Card.Content
					header='Dcoker-bitwarden'
					meta='accel'
					description='use bitwarden on docker'
				/>
				<CardContent extra>
					<CommentAuthor >
						bitwarden
					</CommentAuthor>
				</CardContent>
			</Card>
				<Card as={Link} to="/blog/4">
					<Card.Content
						header='Dcoker-jellyfin'
						meta='accel'
						description='use jellyfin on docker'
					/>
					<CardContent extra>
						<CommentAuthor >
							jellyfin
						</CommentAuthor>
					</CardContent>
				</Card>
			</CardGroup>
		</div>);
	}
}
