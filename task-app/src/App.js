// App.js
import React from "react";
import Overview from "./component/Overview";

function App() {
  return (
    <>
    <div className="tasks">
      <Overview title="testing" />
    </div>
    <div>
      <input type="text" placeholder="Enter task"/>
      <button type="button">Enter</button>
    </div>
      </>
  );
}

export default App;

/* function for button that adds button.value to task array.
Will call <Overview task="button.value" /> and append to end of task list
*/
