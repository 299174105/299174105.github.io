import React from "react";
import {  Item, ItemGroup} from "semantic-ui-react";
import {Link} from "react-router-dom";

export class Home extends React.Component {
	
	render() {
		//const paragraph = <Image src="/images/short-paragraph.png"/>;
		return <div className="home">
			
			<ItemGroup>
				<Item>
		<Item.Image  size='small' src='/images/redis.png' />
      <Item.Content>
        <Item.Header as={Link} to="/blog/1">Docker-redis</Item.Header>
        <Item.Meta>
          <span>Yesterday 3:00 PM</span>
          <span>accel</span>
        </Item.Meta>
        <Item.Description>How to install Redis on docker</Item.Description>
		  <Item.Extra as={Link} to="/blog/1">read more</Item.Extra>
      </Item.Content>
				</Item>
				<Item>
		<Item.Image  size='small' src='/images/RabbitMQ.png' />
      <Item.Content>
        <Item.Header as={Link} to="/blog/2">Docker-RabbitMQ</Item.Header>
        <Item.Meta>
          <span>Yesterday 3:00 PM</span>
          <span>accel</span>
        </Item.Meta>
        <Item.Description>How to install RabbitMQ on docker</Item.Description>
		  <Item.Extra as={Link} to="/blog/2">read more</Item.Extra>
      </Item.Content>
				</Item>
				<Item>
		<Item.Image  size='small' src='/images/Bitwarden.png' />
      <Item.Content>
        <Item.Header as={Link} to="/blog/3">Docker-bitwarden</Item.Header>
        <Item.Meta>
          <span>Yesterday 3:00 PM</span>
          <span>accel</span>
        </Item.Meta>
        <Item.Description>How to install Bitwarden on docker</Item.Description>
		  <Item.Extra as={Link} to="/blog/3">read more</Item.Extra>
      </Item.Content>
				</Item>
				<Item>
		<Item.Image  size='small' src='/images/jellyfin.png' />
      <Item.Content>
        <Item.Header as={Link} to="/blog/4">Docker-jellyfin</Item.Header>
        <Item.Meta>
          <span>Yesterday 3:00 PM</span>
          <span>accel</span>
        </Item.Meta>
        <Item.Description>How to install jellyfin on docker</Item.Description>
		  <Item.Extra as={Link} to="/blog/4">read more</Item.Extra>
      </Item.Content>
				</Item>
				
				<Item>
					<Item.Image  size='small' src='/images/ssh.png' />
					<Item.Content>
						<Item.Header as={Link} to="/blog/5">ssh免密登录</Item.Header>
						<Item.Meta>
							<span>Yesterday 3:00 PM</span>
							<span>accel</span>
						</Item.Meta>
						<Item.Description>配置ssh免密登录</Item.Description>
						<Item.Extra as={Link} to="/blog/5">read more</Item.Extra>
					</Item.Content>
				</Item>
			</ItemGroup>
			
		</div>;
	}
}
