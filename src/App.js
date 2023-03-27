import { useState, useEffect } from 'react';
import CharacterList from './components/character-list/CharacterList';
import Search from './components/search-box/Search';
import Title from './components/title/Title';

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [characters, setCharacters] = useState([]);
	const [filteredCharacters, setFilteredCharacters] = useState(characters);

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character')
			.then((res) => res.json())
			.then((data) => setCharacters(data.results));
	}, []);

	useEffect(() => {
		const newFilteredCharacters = characters.filter((character) => {
			return character.name.toLowerCase().includes(searchField);
		});
		setFilteredCharacters(newFilteredCharacters);
	}, [characters, searchField]);

	const onSearchChange = (e) => {
		e.preventDefault();
		const searchFieldString = e.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<h1> App Class Component</h1>
			<Title title='Title goes here' subTitle=' Optional Sub title' />
			<Search
				onSearchChange={onSearchChange}
				placeholder='Search by Character'
			/>
			<CharacterList filteredCharacters={filteredCharacters} />
		</div>
	);
};

export default App;
