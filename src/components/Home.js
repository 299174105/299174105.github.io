import React from "react";
import {Grid,  Image, Item, ItemGroup, List} from "semantic-ui-react";
import {Link} from "react-router-dom";

export class Home extends React.Component {
	
	render() {
		const paragraph = <Image src="/images/short-paragraph.png"/>;
		return <div className="home">
			
			<ItemGroup>
				<Item>
		<Item.Image  size='small' src='/images/image.png' />
      <Item.Content>
        <Item.Header>How to install Redis on docker</Item.Header>
        <Item.Meta>
          <span>Yesterday 3:00 PM</span>
          <span>accel</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
		  <Item.Extra as={Link} to="/blog/1">read more</Item.Extra>
      </Item.Content>
				</Item>
				<Item>
		<Item.Image  size='small' src='/images/image.png' />
      <Item.Content>
        <Item.Header>How to install Redis on docker</Item.Header>
        <Item.Meta>
          <span>Yesterday 3:00 PM</span>
          <span>accel</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
		  <Item.Extra as={Link} to="/blog/1">read more</Item.Extra>
      </Item.Content>
				</Item>
				<Item>
		<Item.Image  size='small' src='/images/image.png' />
      <Item.Content>
        <Item.Header>How to install Redis on docker</Item.Header>
        <Item.Meta>
          <span>Yesterday 3:00 PM</span>
          <span>accel</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
		  <Item.Extra as={Link} to="/blog/1">read more</Item.Extra>
      </Item.Content>
				</Item>
				<Item>
		<Item.Image  size='small' src='/images/image.png' />
      <Item.Content>
        <Item.Header>How to install Redis on docker</Item.Header>
        <Item.Meta>
          <span>Yesterday 3:00 PM</span>
          <span>accel</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
		  <Item.Extra as={Link} to="/blog/1">read more</Item.Extra>
      </Item.Content>
				</Item>
			</ItemGroup>
			
		</div>;
	}
}
