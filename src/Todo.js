import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import './Todo.css';
import React from 'react'
import db from './firebase'
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy Deadline ⏰"></ListItemText>
            </ListItem>
            <DeleteForeverSharpIcon onClick={event => {
                db.collection('todos').doc(props.todo.id).delete()
                }} />
        </List>
    )
}

export default Todo
