import React from 'react';
import TodoItem from './TodoItem.js';

 class TodoList extends React.Component {
     render(){
         return(
            <div className = "container bg-secondary">
            this.props.todolist.map( todo => <TodoItem  
                key = {todo.id} 
                todo = {todo} 
                onDelete={() => this.props.onDelete(todo.id)} 
                onChange={() => this.props.onChange(todo.id)}/> );
                </div>
         );
     }
}

export default TodoList;