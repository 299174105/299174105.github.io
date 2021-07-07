import React, {useEffect, useState} from "react";
import Markdown from "markdown-to-jsx";
import {useParams} from "react-router-dom"
import posts from "../apis/posts";
import {Button, Comment, Form} from "semantic-ui-react";

export default function Blog () {
	
		let {id} = useParams();
		const [markdown,setMarkdown] = useState("hello world");
		useEffect(  () => {
			
			async function test() {
				//const file = await import(`../posts/article-${id}.md`);
				//const response = await fetch(file.default);
				//const text = await response.text();
				const response1 = await posts.get("/post/search/getPostByTitle?title=transmission");
				const text = await response1.data.content;
				setMarkdown(text);
			}
			test();
		},[id])

		
		return (<div className={"markdown-body"}>
		<Markdown  children={markdown}/>
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
		</div>)
	
}
