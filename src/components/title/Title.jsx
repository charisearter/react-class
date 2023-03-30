const Title = ({ title, subTitle, className, onTitleChange }) => {
	return (
		<div>
			<input
				className={`change-title-box ${className}`}
				type='text'
				placeholder='Set tile'
				onChange={onTitleChange}
			/>
			<h1> {title}</h1>
			<h3> {subTitle}</h3>
		</div>
	);
};

export default Title;
