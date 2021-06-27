import React, {useEffect, useState} from "react";
import Markdown from "markdown-to-jsx";
import {useParams} from "react-router-dom"

export default function Blog () {
	
		let {id} = useParams();
		const [markdown,setMarkdown] = useState("hello world");
		useEffect(  () => {
			
			async function test() {
				const file = await import(`../posts/article-${id}.md`);
				const response = await fetch(file.default);
				const text = await response.text();
				setMarkdown(text);
			}
			test();
		},[id])

		
		return (<div className={"markdown-body"}>
		<Markdown  children={markdown}/>
		</div>)
	
}
