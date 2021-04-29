import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@material-ui/core";
import "./Todo.css";
import React, { useState } from "react";
import db from "./firebase";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import { makeStyles } from "@material-ui/core/styles";

//react hook for styling modal
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  //Styling Modal
  const classes = useStyles();
  //State that tracks opening modal
  const [open, setOpen] = useState(false);
  //State for input in Modal
  const [input, setInput] = useState();

  //Modal Functions
  const handleOpen = () => {
    setOpen(true);
  };
  //Update our Todo
  const updateTodo = () => {
    //update to do with new input text
    db.collection('todos').doc(props.todo.id).set({
        todo: input
    }, { merge: true});
    // Close Modal  
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>I am a Modal</h1>
          <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>

      <List className="todo_list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy Deadline ⏰"
          ></ListItemText>
        </ListItem>
        <button
          onClick={(e) => {
            setOpen(true);
          }}
        >
          Edit
        </button>
        <DeleteForeverSharpIcon
          onClick={(event) => {
            db.collection("todos").doc(props.todo.id).delete();
          }}
        />
      </List>
    </>
  );
}

export default Todo;
