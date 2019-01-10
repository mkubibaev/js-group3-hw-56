import React, {Component} from 'react';
import Cell from "../../components/Cell/Cell";
import Reset from "../../components/Reset/Reset";
import Tries from "../../components/Tries/Tries";

class Board extends Component {

	state = {
		cells: [],
		tries: 0
	};


	componentDidMount() {
		this.resetGame();
	}

	onClick = id => {
		const cells = this.state.cells;

		if (!cells[id].clicked) {
			cells[id].clicked = true;

			this.setState({cells, tries: this.state.tries + 1})
		}
	};

	resetGame = () => {
		const cells = [];
		const randomNum = Math.floor(Math.random() * 36);
		console.log(randomNum);

		for (let i = 0; i < 36; i++) {
			const cell = {id: i, clicked: false};

			cell.hasItem = i === randomNum;
			cells.push(cell);
		}

		this.setState({cells, tries: 0})
	};

	render () {
		return (
			<div className="Board">
				<div className="BoardInner">
					{this.state.cells.map(cell => (
						<Cell
							key={cell.id}
							clicked={cell.clicked}
							hasItem={cell.hasItem}
							onClick={() => this.onClick(cell.id)}
						/>
					))}
				</div>
				<Tries tries={this.state.tries}/>
				<Reset reset={this.resetGame}/>
			</div>
		)
	}

}

export default Board;