import React from 'react';

const Cell = props => {
	const cellClasses = ['Cell'];

	if (props.clicked) {
		cellClasses.push('clicked');
	}

	return (
		<div
			className={cellClasses.join(' ')}
			onClick={props.onClick}
		>
			{props.hasItem ? <span>O</span> : null}
		</div>
	);
};

export default Cell;