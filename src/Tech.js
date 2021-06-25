import short_paragraph from "./statics/images/short-paragraph.png";
import paragraph from "./statics/images/paragraph.png";
import React from "react";

export function Tech() {
	return (
		<div>
			<div className="ui  segment">
				<img className="ui wireframe image" src={short_paragraph} alt="alt"/>
			
			</div>
			<div className="ui segment">
				<img className="ui wireframe image" src={paragraph} alt="alt"/>
			</div>
		</div>
	);
}