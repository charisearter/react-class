// Implicit return because I am not returning anything else

const Search = ({ onSearchChange, placeholder, className }) => (
	<input
		className={`search-box ${className}`}
		type='search'
		placeholder={placeholder}
		onChange={onSearchChange}
	/>
);
export default Search;
