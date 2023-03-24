import { Component } from 'react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			title: 'Title goes here',
			users: [
				{
					id: 1,
					name: 'A',
				},
				{
					id: 2,
					name: 'B',
				},
				{
					id: 3,
					name: 'C',
				},
			],
		};
	}
	render() {
		const { title, users } = this.state;
		return (
			<div className='App'>
				<h1>{title}</h1>
				<h2>Users</h2>
				{users.map((user) => {
					const { id, name } = user;
					return <h1 key={id}>{name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
