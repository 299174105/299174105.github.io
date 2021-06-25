import React from "react";
import {Image} from "semantic-ui-react";

export class Home extends React.Component {
	render() {
		return <div>
			<div className="ui  segment">
				<Image src="/images/short-paragraph.png"/>
			</div>
			<div className="ui segment">
				<Image src="/images/paragraph.png"/>
			</div>
		</div>;
	}
}
