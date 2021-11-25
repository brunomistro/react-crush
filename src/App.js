import { useEffect, useState } from "react";

const width = 8
const colors = [
	'blue',
	'green',
	'orange',
	'purple',
	'red',
	'yellow'
]

export default function App() {
	const [colorsArrangement, setColorsArrangement] = useState([])

	const checkForColumnOfThree = () => {
		for(let i = 0; i < 47; i++) {
			const columnOfThree = [i, i + width, i + width * 2]
			const decidedCOlor = colorsArrangement[i]
		}
	}

	const board = () => {
		const randomBoard = []
		for(let i = 0; i < width * width; i++) {
			randomBoard.push(colors[Math.floor(Math.random() * colors.length)])
		}
		setColorsArrangement(randomBoard)
	}

	useEffect(() => { board() },[])

  return (
    <div className="app">
			<div className="game">
				{colorsArrangement.map((item, index) => (
					<img
						key={index}
						style={{background: item}}
						alt={item + " " + index}
					/>
				))}
			</div>
    </div>
  );
}