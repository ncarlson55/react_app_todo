import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Dummy Deadline ⏰"></ListItemText>
            </ListItem>
        </List>
    )
}

export default Todo