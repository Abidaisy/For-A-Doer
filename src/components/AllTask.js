import React, {useEffect,useState} from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import moment from 'moment'
import { ListGroup } from 'reactstrap';
import {FaPlus} from "react-icons/fa";
import {visibilityFilter} from '../action/action_creators'
import EditForm from './EditForm'

const AllTask = (props) => {
    const [editTodo,setEditTodo] = useState('');
    const [showAdd,setShowAdd] = useState(false);
    const [showEdit,setShowEdit] = useState(false);
    
    let toDisplayAdd;
    let toDisplayEdit;

    let title = props.title;
    let collatedTaskExist = visibilityFilter.find(task => task === title);
    let collatedDate = '';
    if (title === 'Today'){
        collatedDate = moment().format('DD/MM/YYYY');
    }else if (title === 'Next Week'){
        collatedDate = moment().add(7,'days').format('DD/MM/YYYY');
    }
    // componentDidUpdate = (prevProps) => {
    //  if(prevProps.title !== props.title)
    //  {
    //      setShowAdd(false);
    //  }
    // } it is the stateful version for the below useEffect hook
    useEffect(() => {
        setShowAdd(false);
      },[title]); // Only re-run the effect if count changes


    const handleEdit = (value) =>{
        let taskDate = collatedDate? collatedDate : value.date;
        let label = (!collatedTaskExist)? title :value.label;
        props.editTodo(value.id,value.text,label,taskDate);
        setShowEdit(false);
    }
    const handleAdd = (value) =>{
        let taskDate = collatedDate? collatedDate : value.date;
        let label = (!collatedTaskExist)? title :value.label;
        props.addTodo(value.text,label,taskDate);
    }
    const handleEditClicked = (value) =>{
        setEditTodo(value); 
        setShowAdd(false);
        setShowEdit(true);
    }
    const handleAddClicked = () => {
        setShowAdd(true);
        setShowEdit(false);
    }
    const handleCheck = (id) =>{
        props.toggleTodo(id);
    }
    const handleHideAdd = () => {
        setShowAdd(false);
    }
    const handleHideEdit = () => {
        setShowEdit(false);
    }
    useEffect(() => {
        document.title = `${title} : Your Todos`;
      });
      if(showEdit){
        toDisplayEdit = <ListGroup flush={true} className="border_reset">
        {props.todos.map( todo => {
        if(todo.id === editTodo.id)
        return <EditForm key={editTodo.id} edit={editTodo} toEditTodo={handleEdit} setHideEdit={handleHideEdit}/>
        return <TodoItem 
         key = {todo.id} 
         todo = {todo}
         toEdit = {handleEditClicked}
         onDelete={(id) => props.deleteTodo(id)}
         onToggle={handleCheck} />
        })}
     </ListGroup>
      }
      else{
       toDisplayEdit = <ListGroup flush={true} className="border_reset">
       {props.todos.map( todo => (<TodoItem 
        key = {todo.id} 
        todo = {todo}
        toEdit = {handleEditClicked}
        onDelete={(id) => props.deleteTodo(id)}
        onToggle={handleCheck} />
        ))}
        </ListGroup>
      }
      toDisplayAdd = showAdd?
      <AddTodo toAdd={handleAdd} setHideAdd={handleHideAdd}/>:
      <div href="#" onClick={handleAddClicked} className="add my-3 add_task">
      <FaPlus/>
      <span className="p-2">Add Task</span></div>;

    //   console.log(props);
    return(
            <div className="p-4 px-5" onClick={props.sideReset}>
            <h5 className="title-style">{title}</h5>
                {toDisplayEdit}
            {toDisplayAdd}
            </div>
        );
    }

export default AllTask;