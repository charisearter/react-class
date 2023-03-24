import { Component } from 'react';

class Search extends Component {
	render() {
		const { onSearchChange, placeholder } = this.props;
		return (
			<div>
				<input
					type='text'
					placeholder={placeholder}
					onChange={onSearchChange}
				/>
			</div>
		);
	}
}

export default Search;
