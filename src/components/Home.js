import React from "react";
import {Icon, Item, ItemGroup} from "semantic-ui-react";
import {Link} from "react-router-dom";
import "./Home.css"
import moment from "moment";

export class Home extends React.Component {

	
	render() {
		return <div className="home">
			
			<ItemGroup divided>
				{this.props.postList.map((p,index)=> {
			const url =`/blog/${p.title}`;
			return	<Item key={index}>
					<Item.Image size='tiny' src={p.cover}/>
					<Item.Content>
						<Item.Header as={Link} to={url}>{p.title}</Item.Header>
						<Item.Meta>
							<span><Icon name ="time"/>{moment(p.createTime,"YYYY-MM-DD hh:mm:ss").fromNow()}</span>
							{/*<Icon name ="user" color="grey">{p.author}</Icon>*/}
						</Item.Meta>
						<Item.Description>{p.summary}</Item.Description>
						<Item.Extra as={Link} to={url}>read more</Item.Extra>
					</Item.Content>
				</Item>
			})}
				
			
			</ItemGroup>
			
			
		</div>;
	}
}
