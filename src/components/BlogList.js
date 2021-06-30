import React from "react";
import {Link} from "react-router-dom";
import { List} from "semantic-ui-react";

export class BlogList extends React.Component {
	render() {
		return (<div style={{margin:"10px 20px"}}>
			<List divided relaxed>
				<List.Item>
					<List.Icon name='docker' size='large' verticalAlign='middle' />
					<List.Content>
						<List.Header as={Link} to="/blog/1">docker-redis</List.Header>
						<List.Description as={Link} to="/blog/1">install redis on docker</List.Description>
					</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon name='docker' size='large' verticalAlign='middle' />
					<List.Content>
						<List.Header as={Link} to="/blog/2">docker-rabbitMQ</List.Header>
						<List.Description as={Link} to="/blog/2">install rabbitMQ on docker</List.Description>
					</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon name='docker' size='large' verticalAlign='middle' />
					<List.Content>
						<List.Header as={Link} to="/blog/3">docker-bitwarden</List.Header>
						<List.Description as={Link} to="/blog/3">install bitwarden on docker</List.Description>
					</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon name='docker' size='large' verticalAlign='middle' />
					<List.Content>
						<List.Header as={Link} to="/blog/4">docker-jellyfin</List.Header>
						<List.Description as={Link} to="/blog/4">install jellyfin on docker</List.Description>
					</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon name='linux' size='large' verticalAlign='middle' />
					<List.Content>
						<List.Header as={Link} to="/blog/5">ssh免密登录</List.Header>
						<List.Description as={Link} to="/blog/5">配置ssh免密登录</List.Description>
					</List.Content>
				</List.Item>
			</List>
		</div>);
	}
}
