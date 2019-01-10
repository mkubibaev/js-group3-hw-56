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
			<span className="front" />
			{props.hasItem ?
				<span className="back"><strong>O</strong></span>
				: <span className="back"/>
			}
		</div>
	);
};

export default Cell;