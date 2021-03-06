import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";

function App() {
  // Setting up first state, our todos will start with an empty array
  const [todos, setTodos] = useState([]);
  //State used to remember input
  const [input, setInput] = useState("");

  //When app loads, we need to listen to database and fetch todos as they get added/removed
  useEffect(() => {
    // fires when App.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  // Add Todo
  const addToDo = (event) => {
    event.preventDefault(); //Prevent default refreshing of page

    db.collection("todos").add({
      todo: input,
      //add timestap when we push our todo to the database
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    //This will fire off when we click the button
    setTodos([...todos, input]);
    setInput(""); // clears the input after hitting enter
    console.log(todos);
  };

  return (
    <div className="App">
      <h1> Hello Nico! Here is your ToDo List:</h1>

      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addToDo}
        >
          Add ToDo
        </Button>
      </FormControl>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
