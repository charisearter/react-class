import Card from '../card/Card';

const CharacterList = ({ filteredCharacters }) => {
	return (
		<div>
			<h1> Character List </h1>
			{filteredCharacters.map((character) => {
				return <Card key={character.id} character={character} />;
			})}
		</div>
	);
};

export default CharacterList;
