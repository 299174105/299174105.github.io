import React from "react";
import {Link} from "react-router-dom";
import { List} from "semantic-ui-react";

export class RecommendList extends React.Component {
	render() {
		return (<div style={{margin:"10px 20px"}}>
			<List divided relaxed>
				<List.Item>
					<List.Icon name='docker' size='large' verticalAlign='middle' />
					<List.Content>
						<List.Header as={Link} to="/blog/使用Docker安装redis">redis安装</List.Header>
						<List.Description as={Link} to="/blog/使用Docker安装redis">使用docker安装redis</List.Description>
					</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon name='docker' size='large' verticalAlign='middle' />
					<List.Content>
						<List.Header as={Link} to="/blog/使用Docker安装RabbitMQ">rabbitMQ安装</List.Header>
						<List.Description as={Link} to="/blog/使用Docker安装RabbitMQ">使用docker安装rabbitMQ</List.Description>
					</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon name='docker' size='large' verticalAlign='middle' />
					<List.Content>
						<List.Header as={Link} to="/blog/使用Docker安装bitwarden">bitwarden安装</List.Header>
						<List.Description as={Link} to="/blog/使用Docker安装bitwarden">使用docker安装bitwarden</List.Description>
					</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon name='docker' size='large' verticalAlign='middle' />
					<List.Content>
						<List.Header as={Link} to="/blog/使用Docker安装jellyfin">jellyfin安装</List.Header>
						<List.Description as={Link} to="/blog/使用Docker安装jellyfin">使用docker安装jellyfin</List.Description>
					</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon name='linux' size='large' verticalAlign='middle' />
					<List.Content>
						<List.Header as={Link} to="/blog/SSH免密登录设置">ssh免密登录</List.Header>
						<List.Description as={Link} to="/blog/SSH免密登录设置">配置ssh免密登录</List.Description>
					</List.Content>
				</List.Item>
			</List>
		</div>);
	}
}
