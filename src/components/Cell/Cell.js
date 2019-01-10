import React from 'react';

const Cell = props => {
	return (
		<div className="Cell">
			{props.hasItem ? <span>O</span> : null}
		</div>
	);
};

export default Cell;