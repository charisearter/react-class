import { useState, useEffect } from 'react';
import CharacterList from './components/character-list/CharacterList';
import Search from './components/search-box/Search';
import Title from './components/title/Title';

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [title, setTitle] = useState('Title here');
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

	const onTitleChange = (e) => {
		e.preventDefault();
		const titleString = e.target.value;
		setTitle(titleString);
	};
	return (
		<main className='App'>
			<Title
				className='title-change'
				title={title}
				subTitle=' Optional Sub title'
				onTitleChange={onTitleChange}
			/>
			<Search
				onSearchChange={onSearchChange}
				placeholder='Search by Character'
			/>
			<CharacterList filteredCharacters={filteredCharacters} />
		</main>
	);
};

export default App;
