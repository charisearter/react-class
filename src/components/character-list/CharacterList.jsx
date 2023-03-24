import { Component } from 'react';

class CharacterList extends Component {
	render() {
		const { filteredCharacters } = this.props;
		return (
			<div>
				<h1> Character List </h1>
				<h2> List of characters</h2>
				{filteredCharacters.map((character) => {
					const { id, name } = character;
					return <h1 key={id}>{name}</h1>;
				})}
			</div>
		);
	}
}

export default CharacterList;
