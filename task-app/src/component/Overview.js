// Overview.js component

import React from "react";

function Overview(props) {

	// if I want to just enter a single function inside <ul>:
	/*function displayTasks(props) {
		return (
			props.tasks.map((task, index) => {
				return (
					<li key={index}>{task}</li>
				);
			})	
		);		
	}*/

    return (
        <>
        <div>{props.title}</div>
        <ul>
		  {props.tasks.map((task, index) => {
			return (
			  <li key={index}>{task}</li>
			);
		  })}
        </ul>
        </>
    );
}

export default Overview;



// google "reactjs lists and keys" for how to add entire block of list values inside list

// google "reactjs using the state hook" for using state in functional component