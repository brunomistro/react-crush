import { useEffect, useState } from "react";

const width = 8
const colors = ['blue', 'green', 'orange', 'purple', 'red', 'yellow']

export default function App() {
	const [colorsArrangement, setColorsArrangement] = useState([])

	const checkForColumnOfThree = () => {
		for(let i = 0; i < 47; i++) {
			const columnOfThree = [i, i + width, i + width * 2]
			const decidedCOlor = colorsArrangement[i]
			if(columnOfThree.every(square => colorsArrangement[square] === decidedCOlor)){
				columnOfThree.forEach(square => colorsArrangement[square] = '')
			}
		}
	}

	const checkForRowOfThree = () => {
		for(let i = 0; i < 47; i++) {
			const RowOfThree = [i, i + 1, i + 2]
			const decidedCOlor = colorsArrangement[i]
			const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]
			if(notValid.includes(i)) continue
			if(RowOfThree.every(square => colorsArrangement[square] === decidedCOlor)){
				RowOfThree.forEach(square => colorsArrangement[square] = '')
			}
		}
	}

	const checkForColumnOfFour = () => {
		for(let i = 0; i < 39; i++) {
			const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
			const decidedCOlor = colorsArrangement[i]
			if(columnOfFour.every(square => colorsArrangement[square] === decidedCOlor)){
				columnOfFour.forEach(square => colorsArrangement[square] = '')
			}
		}
	}

	const checkForRowOfFour = () => {
		for(let i = 0; i < 47; i++) {
			const RowOfFour = [i, i + 1, i + 2, i + 3]
			const decidedCOlor = colorsArrangement[i]
			const notValid = [
				5, 6, 7, 
				13, 14, 15, 
				21, 22, 23, 
				29, 30, 31, 
				37, 38, 39, 
				45, 46, 47, 
				53, 54, 55, 
				62, 63, 64
			]
			if(notValid.includes(i)) continue
			if(RowOfFour.every(square => colorsArrangement[square] === decidedCOlor)){
				RowOfFour.forEach(square => colorsArrangement[square] = '')
			}
		}
	}

	const moveIntoSquareBelow = () => {
		for(let i = 0; i < 64 - width; i++) {
			const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]

			if((firstRow.includes(i)) && colorsArrangement[i] === '') {
				let random = Math.floor(Math.random() * colors.length)
				colorsArrangement[i] = colors[random]
			}

			if((colorsArrangement[i + width]) === '') {
				colorsArrangement[i + width] = colorsArrangement[i]
				colorsArrangement[i] = ''
			}
		}
	}
	
	useEffect(() => {
		const timer = setInterval(() => {
				checkForColumnOfFour()
				checkForRowOfFour()
				checkForColumnOfThree()
				checkForRowOfThree()
				moveIntoSquareBelow()
				setColorsArrangement(() => [...colorsArrangement])
		}, 100)
		return () => clearInterval(timer)
}, [checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, moveIntoSquareBelow])

	useEffect(() => { board() },[])
	const board = () => {
		const randomBoard = []
		for(let i = 0; i < width * width; i++) {
			randomBoard.push(colors[Math.floor(Math.random() * colors.length)])
		}
		setColorsArrangement(randomBoard)
	}

  return (
    <div className="app">
			<div className="game">
				{colorsArrangement.map((item, index) => (
					<img
						key={index}
						style={{background: item}}
						alt={item}
					/>
				))}
			</div>
    </div>
  );
}