const Card = ({
	character: {
		name,
		image,
		location,
		status,
		species,
		gender,
		origin,
		episode,
	},
}) => {
	return (
		<div>
			<img
				src={image}
				alt={`Profile for ${name}`}
				width={'150px'}
				height={'150px'}
			/>
			<h2> {name} </h2>
			<h3> Location: {location.name}</h3>
			<h3> Origin: {origin.name}</h3>
			<h3> Status: {status}</h3>
			<p> Species: {species}</p>
			<p> Gender: {gender}</p>
			<p> Episodes: {episode.length}</p>
		</div>
	);
};

export default Card;
