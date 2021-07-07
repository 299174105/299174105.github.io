import React from "react";
import Markdown from "markdown-to-jsx";

class Blog1 extends React.Component {
	constructor(props) {
		super(props);
		this.state={markdown: ""}
	}
	
	async componentDidMount() {
		const file = await import(`../posts/${this.props.match.params.id}.md`);
		const response = await fetch(file.default);
		const text = await response.text();
		this.setState({markdown:text})
	}
	
	render() {
		return (
			<div key={this.props.match.params.id}>
		<div  className={"markdown-body"}>
			<Markdown  children={this.state.markdown}/>
			
		</div>
			{/*<div>
				<hr/>
							<Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>1 day ago</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>
            The hours, minutes and seconds stand as visible reminders that your
            effort put them all there.
          </p>
          <p>
            Preserve until your next run, when the watch lets you see how
            Impermanent your efforts are.
          </p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar as='a' src='/images/avatar/small/christian.jpg' />
      <Comment.Content>
        <Comment.Author>Christian Rocha</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>I re-tweeted this.</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>

			</div>*/}
				</div>
		);
	}
	
}

const blog = props=><Blog1 {...props} key={props.match.params.id}/>

export default blog
