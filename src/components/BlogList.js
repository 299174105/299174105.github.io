import React from "react";
import {Link} from "react-router-dom";
import {Card, CardContent, CardGroup, CommentAuthor, Image} from "semantic-ui-react";

export class BlogList extends React.Component {
	render() {
		return (<div style={{margin:"10px 20px"}}>
			<CardGroup itemsPerRow="4">
			<Card raised  as={Link} to="/blog/1">
				<Card.Content>
					<Image
						avatar
						floated='right'
						size='tiny'
						src='/images/avatar(blue).png'
					/>
					<Card.Header>Docker-redis</Card.Header>
					<Card.Meta>accel</Card.Meta>
				<Card.Description>install redis on docker</Card.Description>
				</Card.Content>
				<CardContent extra>
					<CommentAuthor >
						redis
					</CommentAuthor>
				</CardContent>
			</Card>
			<Card raised  as={Link} to="/blog/2">
				
				<Card.Content>
					<Image
						avatar
						floated='right'
						size='tiny'
						src='/images/avatar(blue).png'
					/>
					<Card.Header>Docker-rabbitMQ</Card.Header>
					<Card.Meta >accel</Card.Meta>
					<Card.Description>install rabbitMQ on docker</Card.Description>
				</Card.Content>
				<CardContent extra>
					<CommentAuthor >
						rabbitMQ
					</CommentAuthor>
				</CardContent>
			</Card>
			<Card as={Link} to="/blog/3">
				<Card.Content>
				<Image
					avatar
					floated='right'
					size='tiny'
					src='/images/avatar(blue).png'
				/>
					<Card.Header>Docker-bitwarden</Card.Header>
					<Card.Meta >accel</Card.Meta>
					<Card.Description>install bitwarden on docker</Card.Description>
				</Card.Content>
				
				<CardContent extra>
					<CommentAuthor >
						bitwarden
					</CommentAuthor>
				</CardContent>
			</Card>
				<Card as={Link} to="/blog/4">
					<Card.Content>
						<Image
							avatar
							floated='right'
							size='tiny'
							src='/images/avatar(blue).png'
						/>
						<Card.Header>Docker-jellyfin</Card.Header>
						<Card.Meta >accel</Card.Meta>
						<Card.Description>install jellyfin on docker</Card.Description>
					</Card.Content>
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
