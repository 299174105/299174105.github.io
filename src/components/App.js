import React from "react";
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import About from "./About";
import {Grid, Label, Menu, Pagination} from "semantic-ui-react";
import "./app.css"
import {Home} from "./Home";
import {RecommendList} from "./RecommendList";
import Blog1 from "./Blog1";
import posts from "../apis/posts";

class App extends React.Component{
		handlePaginationChange = async (e, { activePage }) => {
		const response = await posts.get(`/post/?page=${activePage-1}&size=4`);
		const postList = response.data._embedded.post;
		this.setState({postList})
	};
	constructor(props) {
		super(props);
		this.state={
			postList:[],
			pageInfo: {totalPages:1},
			activePage: 1,
			visible: true
		}
	}
	async componentDidMount() {
		const response = await posts.get("/post/?page=0&size=4");
		const postList = response.data._embedded.post;
		const pageInfo = response.data.page;
		//console.log(response);
		this.setState({postList,pageInfo})
		
	}
  render() {
  return (
  	<div>
		<Router>
			
			<div className="my-nav-bar">
				<Menu pointing secondary>
					{/*<Menu.Item
						name='主页'
						as = {Link} to="/home"
					/>*/}
					{/*<Menu.Item
						name='技术'
						as = {Link} to="/tech"
					/>*/}
					<Menu.Item
						name='博客'
						as = {Link} to="/blog"
					/>
					<Menu.Menu position='right'>
						<Menu.Item
							name='关于'
							as = {Link} to="/about"
						/>
					</Menu.Menu>
				</Menu>
			</div>
			
			<div className="my-container">
				<Switch>
					<Route exact  path="/about"><About/></Route>
				</Switch>
				<Grid container stackable>
				<Grid.Column width={12} >
					<Switch>
					<Route exact path={["/","/home","/blog"]}>
						<Home postList ={this.state.postList}/>
						<Pagination className="page-footer"
									firstItem={null}
									lastItem={null}
									defaultActivePage={1}
									pointing
									secondary
									totalPages={this.state.pageInfo.totalPages}
									onPageChange={this.handlePaginationChange}
						/>
					</Route>
					<Route path="/blog/:id" component={Blog1}  />
				</Switch>
				</Grid.Column>
				<Switch>
					<Route exact  path={["/","/home","/blog","/blog/:id"]}>
						<Grid.Column width={4}>
							<h4>推荐</h4>
							<RecommendList/>
							<h4>标签</h4>
							<Label as='a' tag>
								New
							</Label>
							<Label as='a' tag>
								Docker
							</Label>
							<Label as='a' tag>
								Nginx
							</Label>
							<hr/>
							<Label as='a' color="red" tag>
								Nginx
							</Label>
							<Label as='a' tag>
								Nginx
							</Label>
				</Grid.Column>
					</Route>
				</Switch>
				
			</Grid>
			</div>
			
		</Router>
	</div>
	 
  )
  }
  
}

export default App;
