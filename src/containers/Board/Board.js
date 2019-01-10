import React, {Component} from 'react';
import Cell from "../../components/Cell/Cell";

class Board extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cells: []
		};

		const randomNum = Math.floor(Math.random() * 36);
		console.log(randomNum);

		for (let i = 0; i < 36; i++) {

			if (i === randomNum) {
				this.state.cells.push({id: i, hasItem: true});
			} else {
				this.state.cells.push({id: i, hasItem: false});
			}


		}

	}




	render () {
		return (
			<div className="Board">
				{this.state.cells.map(cell => (
					<Cell
						key={cell.id}
						hasItem={cell.hasItem}
					/>
				))}
			</div>
		)
	}

}

export default Board;