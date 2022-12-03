// App.js
import React, { useState } from "react";
import Overview from "./component/Overview";

function App() {

	const [tasks, setTask] = useState([]);

	const updateTasksList = () => {
		const input = document.querySelector('input');
		if (input.value !== '') {
			const newTask = input.value;
			input.value = '';
			
			// using push instead of 'concat' cause an error for some reason ??
			setTask(tasks.concat(newTask));	
			// using '...'
			// setTask(current => [...current, newTask]);

		} else return;		
	}

	return (
		<>
		<div>
    	  <input type="text" placeholder="Enter task"/>
    	  <button type="button" className="submitButton" onClick={updateTasksList}>Enter</button>
    	</div>
    	<div className="tasks">
    	  <Overview title="Tasks list:" tasks={tasks}/>
    	</div>
    	</>
	);
}

export default App;
