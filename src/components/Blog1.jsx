import React from "react";
import Markdown from "markdown-to-jsx";

class Blog1 extends React.Component {
	constructor(props) {
		super(props);
		this.state={markdown: ""}
	}
	
	async componentDidMount() {
		const file = await import(`../posts/article-${this.props.match.params.id}.md`);
		const response = await fetch(file.default);
		const text = await response.text();
		this.setState({markdown:text})
	}
	
	render() {
		return (
		<div key={this.props.match.params.id} className={"markdown-body"}>
			<Markdown  children={this.state.markdown}/>
		</div>
		);
	}
	
}

const blog = props=><Blog1 {...props} key={props.match.params.id}/>

export default blog
