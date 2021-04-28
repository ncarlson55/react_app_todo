import React, { useState } from 'react';
import './App.css';

function App() {
  // Setting up first state, our todos will start with an empty array
  const [todos, setTodos] = useState(['Take dogs for walk', 'Take trash out', 'wash dishes']); 

  return (
    <div className="App">
      <h1> Hello Nico! Here is your ToDo List:</h1>
      <input/>
      <button>Add ToDo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
