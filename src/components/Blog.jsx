import React, {useEffect, useState} from "react";
import Markdown from "markdown-to-jsx";
import {useParams} from "react-router-dom"
import posts from "../apis/posts";

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
		</div>)
	
}
