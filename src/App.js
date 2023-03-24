import { Component } from 'react';
import CharacterList from './components/character-list/CharacterList';
import Search from './components/search-box/Search';
import Title from './components/title/Title';
class App extends Component {
	constructor() {
		super();
		this.state = {
			characters: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://rickandmortyapi.com/api/character')
			.then((res) => res.json())
			.then((data) => {
				console.log(data.results);
				this.setState({ characters: data.results });
			});
	}

	onSearchChange = (e) => {
		e.preventDefault();
		console.log(e);
		const searchField = e.target.value.toLowerCase();
		this.setState({ searchField });
	};

	render() {
		const { characters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredCharacters = characters.filter((character) => {
			return character.name.toLowerCase().includes(searchField);
		});

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
	}
}

export default App;
