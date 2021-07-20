import React from "react";
import {Icon, Item, ItemGroup} from "semantic-ui-react";
import {Link} from "react-router-dom";
import "./Home.css"
import moment from "moment";
import 'moment/locale/zh-cn'

export class Home extends React.Component {

	
	render() {
		return <div className="home">
			
			<ItemGroup >
				{this.props.postList.map((p,index)=> {
			const url =`/blog/${p.title}`;
			return	<Item key={index} >
					<Item.Image as={Link} to={url}  size='small' src={p.cover}/>
					<Item.Content>
						<Item.Header as={Link} to={url}>{p.title}</Item.Header>
						<Item.Meta>
							<span><Icon name ="time"/>{moment(p.createTime,"YYYY-MM-DD hh:mm:ss").fromNow()}</span>
							{/*<Icon name ="user" color="grey">{p.author}</Icon>*/}
						</Item.Meta>
						<Item.Description>{p.summary}</Item.Description>
						<Item.Extra as={Link} to={url}>阅读更多</Item.Extra>
					</Item.Content>
				</Item>
			})}
			
			
			</ItemGroup>
			
			
		</div>;
	}
}
