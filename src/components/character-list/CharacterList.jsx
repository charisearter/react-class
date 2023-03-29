import Card from '../card/Card';

const CharacterList = ({ filteredCharacters }) => {
	return (
		<div>
			<h1> Character List </h1>
			<h2> List of characters</h2>
			{filteredCharacters.map((character) => {
				console.log(filteredCharacters)
				return <Card key={character.id} character={character} />;
			})}
		</div>
	);
};

export default CharacterList;
