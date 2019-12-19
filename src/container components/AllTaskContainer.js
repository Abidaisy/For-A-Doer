
import { connect} from 'react-redux'
import AllTask from '../components/AllTask'
import moment from 'moment'
import {addTodo,deleteTodo,toggleTodo,setFilterCount,editTodo} from '../action/action_creators'

const getTodos =(todos,filter) => {

    switch(filter){
      case 'Inbox':
        return todos;
      case 'Today':
        return todos.filter(todo => todo.date === moment().format('DD/MM/YYYY'));
      case 'Next Week':
        return todos.filter(todo => todo.date === moment().add(7,'days').format('DD/MM/YYYY'));
      default:
        return todos.filter(todo => todo.label === filter);
    } 
}


const mapDispatchToProps = (dispatch) =>
{
       return {
         addTodo:(text,label,date) =>
         {dispatch(addTodo(text,label,date))},
         toggleTodo:(id) =>
        {dispatch(toggleTodo(id)) },
         deleteTodo:(id) =>
         {dispatch(deleteTodo(id))},
         setFilterCount:(filterCount) =>
         {dispatch(setFilterCount(filterCount))},
         editTodo:(id,text,label,date) =>
         {dispatch (editTodo(id,text,label,date)) }
       }
  }
const mapStateToProps = (state,ownProps) => {
    return {
        todos: getTodos(state.todos.todos,ownProps.filter),
        title:ownProps.filter
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AllTask);
