import { Component } from 'react';

class Title extends Component {
	render() {
		const { title, subTitle } = this.props;
		return (
			<div>
				<h1> {title}</h1>
				<h3> {subTitle}</h3>
			</div>
		);
	}
}

export default Title;
