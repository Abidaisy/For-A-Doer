import React from 'react';
import {ListGroupItem} from 'reactstrap';
import { FaRegTrashAlt,FaRegCircle,FaPen,FaRegCheckCircle} from "react-icons/fa";

const TodoItem = (props) => {
  // console.log(props);
  const  getStyle = () =>
         {
        let taskStyle = (props.todo.completed === true) ? {textDecoration: "line-through"} : {textDecoration: "none" };
        return taskStyle;
         }
       return(
         <React.Fragment>
        <ListGroupItem style={{padding:"0.75rem 0rem"}} className="d-flex main_list_color" >
         <a href="#" className="mr-2 add_task" 
         onClick={() => props.onToggle(props.todo.id)}>
         {props.todo.completed?<FaRegCheckCircle/>:<FaRegCircle/>}</a>
         <div  className="my-style" style={getStyle()}>{props.todo.text}</div>
         <div className="ml-auto flex-row icon-set d-flex">
           <span className="ml-auto">
         <a href="#"  className=" add_task mr-3 "  onClick={() => {props.toEdit(props.todo)}} >
         <FaPen/>
         </a>
        <a href="#" className="add_task "
         onClick={() => {
           props.onDelete(props.todo.id);
         }} >
         <FaRegTrashAlt/>
         </a>
         </span>
         </div>
         </ListGroupItem>
         </React.Fragment>);
        }
 export default TodoItem;
