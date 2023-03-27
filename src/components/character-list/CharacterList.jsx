import { Component } from 'react';
import Card from '../card/Card';

class CharacterList extends Component {
	render() {
		const { filteredCharacters } = this.props;
		return (
			<div>
				<h1> Character List </h1>
				<h2> List of characters</h2>
				{filteredCharacters.map((character) => {
					const { id, name } = character;
					return <Card key={id} name={name} />;
				})}
			</div>
		);
	}
}

export default CharacterList;
