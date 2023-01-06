import React, { useState, useEffect } from 'react';
import './App.css';

// exercise 1: useState *comment out each function to isolate the specific exercise you wish to see
// const App = () => {
// 	const [count, setCount] = useState(0);

// 	const incrementCount = () => {
// 		setCount(count + 1);
// 	};

// 	return (
// 		<div>
// 			<div>{count}</div>
// 			<button onClick={incrementCount}>Increment</button>
// 		</div>
// 	);

// };

// exercise 2: useEffect *comment out each function to isolate the specific exercise you wish to see
const App = () => {
	const [color, setColor] = useState("black");

	useEffect(() => {
		const changeColorOnClick = () => {
			if (color === "black") {
				setColor("red");
			} else {
				setColor("Black");
			}
		};

		document.addEventListener("click", changeColorOnClick);

		return () => {
			document.removeEventListener("click", changeColorOnClick);
		};
	}, [color]);
	
	return (
		<div>
		  <div
			id="myDiv"
			style={{
			  color: "white",
			  width: "100px",
			  height: "100px",
			  position: "absolute",
			  left: "50%",
			  top: "50%",
			  backgroundColor: color,
			}}
		  >
			This div can change color. Click on me!
		  </div>
		</div>
	);
};

export default App;
