import React, {createRef} from "react";
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import {Grid, Label, Menu, Ref, Sticky} from "semantic-ui-react";
import "./app.css"
import {Home} from "./Home";
import {RecommendList} from "./RecommendList";
import Blog1 from "./Blog1";
import posts from "../apis/posts";
import About from "./About";

class App extends React.Component{
		handlePaginationChange = async (e, { activePage }) => {
		const response = await posts.get(`/post/?page=${activePage-1}&size=8`);
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
		const response = await posts.get("/post/?page=0&size=8");
		const postList = response.data._embedded.post;
		const pageInfo = response.data.page;
		//console.log(response);
		this.setState({postList,pageInfo})
		
	}
	contextRef = createRef()
  render() {
  return (
  	<div className="rootContainer">
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
				<Grid container stackable className="main-container">
					<Ref innerRef={this.contextRef}>
				<Grid.Column mobile={16} tablet={12} computer={12} >
					<Switch>
					<Route exact path={["/","/home","/blog"]}>
						<Home/>
					{/*	<Pagination className="page-footer"
									firstItem={null}
									lastItem={null}
									defaultActivePage={1}
									pointing
									secondary
									totalPages={this.state.pageInfo.totalPages}
									onPageChange={this.handlePaginationChange}
						/>*/}
					</Route>
					<Route path="/blog/:id" component={Blog1}  />
				</Switch>
				</Grid.Column>
					</Ref>
				<Switch>
					<Route exact  path={["/","/home","/blog","/blog/:id"]}>
						<Grid.Column tablet={4} computer={4} only={'computer'}>
							<Sticky context={this.contextRef}>
							<h4>推荐</h4>
							<RecommendList/>
							{/*<h4>标签</h4>
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
							</Label>*/}
							</Sticky>
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
