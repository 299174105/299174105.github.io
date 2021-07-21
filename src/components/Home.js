import React from "react";
import {Icon, Item, ItemGroup} from "semantic-ui-react";
import {Link} from "react-router-dom";
import "./Home.css"
import moment from "moment";
import 'moment/locale/zh-cn'
import InfiniteScroll from "react-infinite-scroll-component";
import posts from "../apis/posts";

export class Home extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			postList: [],
			hasMore: true,
			next: '/post'
		}
	}
	handlePaginationChange = async () => {
		const response = await posts.get(`${this.state.next}`);
		const postList = this.state.postList.concat(response.data._embedded.post);
		const next = response.data._links.next===undefined?'':response.data._links.next.href
		const hasMore = response.data._links.next !== undefined
		this.setState({postList,next,hasMore})
		//console.log(this.state);
	};
	
	async componentDidMount() {
		await this.handlePaginationChange();
	}
	
	render() {
		return <div className="home">
			
				 <InfiniteScroll
          dataLength={this.state.postList.length}
          next={this.handlePaginationChange}
          hasMore={this.state.hasMore}
          loader={<h2 className="animate">Loading...</h2>}
        >
					 <ItemGroup >
         {this.state.postList.map((p,index)=> {
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
        </InfiniteScroll>
				
			
			
			
			
			
		</div>;
	}
}
